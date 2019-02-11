import React, { Component } from "react";
import FriendContainer from "./Containers/FriendContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <FriendContainer />
      </div>
    );
  }
}

export default App;
