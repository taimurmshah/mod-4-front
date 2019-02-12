import React from "react";
import { Card, Button, Image } from "semantic-ui-react";

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

  const boo = () => {
    alert(`${props.friend.name} says: ${props.phrase}`);
  };

  const deleteHandler = () => {
    fetch(`http://localhost:3000/api/v1/friends/${props.friend.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(obj => {
        console.log("I'm in the delete; here is the response obj:", obj);
        props.deleteHandler(obj);
      });
  };

  return (
    <Card>
      <Image
        src={
          props.img
            ? props.img
            : require(`../friend-imgs/${friendImageName()}.png`)
        }
      />
      <Card.Content>
        <Card.Header>{props.friend.name}</Card.Header>
        {props.phrase ? (
          <Button size="medium" onClick={boo}>
            {"speak"}
          </Button>
        ) : null}
        {props.deleteHandler ? (
          <Button size="medium" onClick={deleteHandler}>
            Banish
          </Button>
        ) : null}
        <Button size="medium" onClick={clickHandler}>
          {props.button}
        </Button>
      </Card.Content>
    </Card>
  );
};

export default FriendCard;
