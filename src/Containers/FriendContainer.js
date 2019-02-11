import React from "react";
import AllFriends from "./AllFriends";
import BestFriends from "./BestFriends";
import Form from "../Components/Form";

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

  render() {
    return (
      <div className="be-the-one">
        <Form changeHandler={this.changeHandler} />
        {this.state.filtered.length > 0 ? (
          <AllFriends
            className="left-container"
            friends={this.state.filtered}
            clickHandler={this.addHandler}
          />
        ) : (
          <h1>Loading</h1>
        )}
        {this.state.bestFriends.length > 0 ? (
          <BestFriends
            className="right-container"
            friends={this.state.bestFriends}
            clickHandler={this.removeHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default FriendContainer;
