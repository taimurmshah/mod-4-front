import React from "react";
import FriendCard from "../Components/FriendCard";

class BestFriends extends React.Component {
  render() {
    let friends = this.props.friends.map(friendObj => {
      return (
        <FriendCard
          key={friendObj.id}
          friend={friendObj}
          clickHandler={this.props.clickHandler}
          button={"ghost?"}
        />
      );
    });
    return (
      <div className="right-container">
        <h1>Best Friends</h1>
        {friends}
      </div>
    );
  }
}

export default BestFriends;
