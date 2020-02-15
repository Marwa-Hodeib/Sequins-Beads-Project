import React from "react";
import "./collection.css"
export default class Collection extends React.Component {
  state = {
    collection:""
  };
  render() {
    return (
      <>
      <div className="main_grid">
          <div className="left">

          </div>
          <div className="right">
          <div className="first">
              <div className="one">jghjbfdugh  ngffehbj
              <input type="button" value="read" class="btn"></input>
              </div>
              <div className="two">2</div>
          </div>
              <div className="second">second item</div>
          </div>
          

      </div>
      </>
    );
  }
}