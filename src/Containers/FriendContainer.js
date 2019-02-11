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

  clickHandler = friendObj => {
    if (this.state.bestFriends.includes(friendObj)) {
      let index = this.state.bestFriends.indexOf(friendObj);
      let removeArray = [...this.state.bestFriends];
      removeArray.splice(index, 1);
      this.setState({
        bestFriends: removeArray
      });
    } else {
      this.setState({
        bestFriends: [friendObj, ...this.state.bestFriends]
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
      <div>
        <Form changeHandler={this.changeHandler} />
        {this.state.filtered.length > 0 ? (
          <AllFriends
            friends={this.state.filtered}
            clickHandler={this.clickHandler}
          />
        ) : (
          <h1>Loading</h1>
        )}
        {this.state.bestFriends.length > 0 ? (
          <BestFriends
            friends={this.state.bestFriends}
            clickHandler={this.clickHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default FriendContainer;
