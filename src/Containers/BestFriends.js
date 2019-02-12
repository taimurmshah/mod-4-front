import React from "react";
import FriendCard from "../Components/FriendCard";

class BestFriends extends React.Component {
  render() {
    let friends = this.props.friends.map(friendObj => {
      if (friendObj.neutral_image) {
        return (
          <FriendCard
            key={friendObj.id}
            friend={friendObj}
            clickHandler={this.props.clickHandler}
            button={"fux wit??"}
            img={friendObj.neutral_image}
          />
        );
      } else {
        return (
          <FriendCard
            key={friendObj.id}
            friend={friendObj}
            clickHandler={this.props.clickHandler}
            button={"ghost?"}
          />
        );
      }
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
