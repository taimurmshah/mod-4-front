import React from "react";

class Form extends React.Component {
  state = {
    name: ""
  };

  changeHandler = e => {
    let name = { [e.target.name]: e.target.value };
    this.setState(name);
    console.log("name:", name);
    this.props.changeHandler(name);
  };

  render() {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="search friends"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    );
  }
}

export default Form;
