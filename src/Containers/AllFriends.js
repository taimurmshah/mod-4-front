import React from "react";
import FriendCard from "../Components/FriendCard";

class AllFriends extends React.Component {
  render() {
    let friends = this.props.friends.map(friendObj => {
      return (
        <FriendCard
          key={friendObj.id}
          friend={friendObj}
          clickHandler={this.props.clickHandler}
          button={"fux wit??"}
        />
      );
    });

    return (
      <div className="left-container">
        <h1>Friends</h1>
        {friends}
      </div>
    );
  }
}

export default AllFriends;
