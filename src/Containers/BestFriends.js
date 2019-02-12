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
            button={"ghost?"}
            phrase={friendObj.catch_phrase}
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
            phrase={friendObj.catch_phrase}
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
