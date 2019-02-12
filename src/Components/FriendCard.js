import React from "react";

const FriendCard = props => {
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
      <img
        className="img"
        alt=""
        src={
          props.img
            ? props.img
            : require(`../friend-imgs/${friendImageName()}.png`)
        }
      />
      <button onClick={clickHandler}>{props.button}</button>
    </div>
  );
};

export default FriendCard;
