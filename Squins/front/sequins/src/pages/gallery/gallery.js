import React from "react";
import { Grommet } from "grommet";
import "./gallery.css";
import SearchBar, { searchBar } from "./searchBar/searchBar";
import Card from "./card/card";
export class gallery extends React.Component {
  state = {};
  render() {
    return (
      <div className="gallery">
        <SearchBar />
        <Card />
      </div>
    );
  }
}
export default gallery;
export default function Gallery(){
    return (
      <>
      <p>Gallery</p>
     
      </>
    );
  }
