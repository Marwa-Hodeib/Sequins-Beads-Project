import React from "react";
import "./card.css";
import image from "./img/img1.jpg";
export class card extends React.Component {
  state = {};

  render() {
    return (
      <div className="card">
        <img src={image} className="imgOfCard" />
        <caption>image cat 1</caption>
      </div>
    );
  }
}
export default card;
