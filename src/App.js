import React, { Component } from "react";
import FriendContainer from "./Containers/FriendContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <h1>Jerold's friends</h1>
        <FriendContainer />
      </div>
    );
  }
}

export default App;
