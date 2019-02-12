import React from "react";

class CreateForm extends React.Component {
  state = {
    name: "",
    catch_phrase: "",
    neutral_image: ""
  };

  changeHandler = e => {
    console.log("onChange:", e.target.value);
    let obj = { [e.target.name]: e.target.value };
    this.setState(obj);
  };

  submitHandler = e => {
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/friends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        catch_phrase: this.state.catch_phrase,
        neutral_image: this.state.neutral_image
      })
    })
      .then(res => res.json())
      .then(obj => {
        this.props.submitHandler(obj);
      });
  };

  render() {
    return (
      <div>
        <h3>Birth a friend</h3>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="enter name"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="enter catch phrase"
            name="catch_phrase"
            value={this.state.catch_phrase}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            placeholder="picture URL"
            name="neutral_image"
            value={this.state.neutral_image}
            onChange={this.changeHandler}
          />

          <button>Birth</button>
        </form>
      </div>
    );
  }
}

export default CreateForm;
