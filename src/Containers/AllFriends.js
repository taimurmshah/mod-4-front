import React from "react";
import FriendCard from "../Components/FriendCard";
import { Grid } from "semantic-ui-react";

class AllFriends extends React.Component {
  render() {
    let friends = this.props.friends.map(friendObj => {
      if (friendObj.neutral_image) {
        return (
          <FriendCard
            key={friendObj.id}
            friend={friendObj}
            clickHandler={this.props.clickHandler}
            deleteHandler={this.props.deleteHandler}
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
            deleteHandler={this.props.deleteHandler}
            button={"fux wit??"}
          />
        );
      }
    });

    return (
      <Grid>
        <div className="left-container">
          <h1>Friends</h1>
          {friends}
        </div>
      </Grid>
    );
  }
}

export default AllFriends;
