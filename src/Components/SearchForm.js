import React from "react";

class SearchForm extends React.Component {
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
        <h3>Search</h3>
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

export default SearchForm;
