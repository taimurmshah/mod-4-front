import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Search</h3>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="search friends"
            name="name"
            value={this.props.value}
            onChange={this.props.changeHandler}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
