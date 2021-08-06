import React from "react";
import "./searchBar.styles.scss";

import CustomButton from "../CustomButton/CustomButton";

class SearchBar extends React.Component {
  state = { text: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.text);
  };

  render() {
    return (
      <div className="search" id="search">
        <h1 className="logo">Iplay</h1>
        <form onSubmit={this.onFormSubmit} className="search-form">
          <input
            className="search-input"
            value={this.state.text}
            placeholder="search your video here!"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <CustomButton type="submit">Search</CustomButton>
        </form>
      </div>
    );
  }
}
export default SearchBar;
