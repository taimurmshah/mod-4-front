import React from "react";

const FriendCard = props => {
  const { friend } = props;

  const friendImageName = () => {
    let friendName = props.friend.name;
    if (friendName.includes(" ")) {
      return friendName
        .split(" ")
        .join("")
        .toLowerCase();
    } else {
      return friendName.toLowerCase();
    }
  };

  const clickHandler = () => {
    props.clickHandler(props.friend);
  };

  return (
    <div>
      <h1>{props.friend.name}</h1>
      <img alt="" src={require(`../friend-imgs/${friendImageName()}.png`)} />
      <button onClick={clickHandler}>Best Friend?</button>
    </div>
  );
};

export default FriendCard;
