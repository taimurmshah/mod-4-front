import React from "react";
import AllFriends from "./AllFriends";
import BestFriends from "./BestFriends";
import SearchForm from "../Components/SearchForm";
import CreateForm from "../Components/CreateForm";

class FriendContainer extends React.Component {
  state = {
    friends: [],
    filtered: [],
    bestFriends: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/friends")
      .then(res => res.json())
      .then(friends => {
        this.setState({
          friends,
          filtered: [...friends]
        });
      });
  }

  addHandler = friendObj => {
    if (!this.state.bestFriends.includes(friendObj)) {
      this.setState({
        bestFriends: [friendObj, ...this.state.bestFriends]
      });
    }
  };

  removeHandler = friendObj => {
    if (this.state.bestFriends.includes(friendObj)) {
      let index = this.state.bestFriends.indexOf(friendObj);
      let removeArray = [...this.state.bestFriends];
      removeArray.splice(index, 1);
      this.setState({
        bestFriends: removeArray
      });
    }
  };

  changeHandler = friendObj => {
    let searched = this.state.friends.filter(friend => {
      return friend.name.toLowerCase().startsWith(friendObj.name.toLowerCase());
    });
    console.log(searched);
    this.setState({
      filtered: [...searched]
    });
  };

  createSubmitHandler = friendObj => {
    console.log(friendObj);
    this.setState({
      friends: [friendObj, ...this.state.friends],
      filtered: [friendObj, ...this.state.filtered]
    });
  };

  deleteHandler = friendObj => {
    let banishedOne = this.state.filtered.find(
      friend => friend.id === friendObj.id
    );
    if (this.state.bestFriends.find(friend => friend.id === friendObj.id)) {
      let oldFriend = this.state.bestFriends.find(
        friend => friend.id === friendObj.id
      );
      this.setState({
        filtered: [
          ...this.state.filtered.filter(friend => friend !== banishedOne)
        ],
        bestFriends: [
          ...this.state.bestFriends.filter(friend => friend !== oldFriend)
        ]
      });
    } else {
      this.setState({
        filtered: [
          ...this.state.filtered.filter(friend => friend !== banishedOne)
        ]
      });
    }
  };

  render() {
    return (
      <div className="be-the-one">
        <SearchForm changeHandler={this.changeHandler} />
        <CreateForm submitHandler={this.createSubmitHandler} />
        {this.state.filtered.length > 0 ? (
          <AllFriends
            friends={this.state.filtered}
            clickHandler={this.addHandler}
            deleteHandler={this.deleteHandler}
          />
        ) : (
          <h1>Loading</h1>
        )}
        {this.state.bestFriends.length > 0 ? (
          <BestFriends
            friends={this.state.bestFriends}
            clickHandler={this.removeHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default FriendContainer;
