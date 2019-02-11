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
        />
      );
    });

    return <div>{friends}</div>;
  }
}

export default AllFriends;
