import React from "react";
import "./searchBar.css";
import { TextInput } from "grommet";
export class searchBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="searchBar">
        <form>
          <input type="text" placeholder="type to search"></input>
          <select value="category">
            <option>none</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <select value="collection">
            <option>none</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <button>Search</button>
        </form>
      </div>
    );
  }
}
export default searchBar;
