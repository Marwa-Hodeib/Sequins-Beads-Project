import React from "react";
import { Grommet } from "grommet";
import "./modalWindow.css";
import image from "./img/img1.jpg";
export class modalWindow extends React.Component {
  state = {};

  render() {
    return (
      <div className="modalWindow">
        <img src={image} className="mainImg" />
        <div className="miniImgContainer">
          <img className="miniImg" src="" />
          <img className="miniImg" src="" />
          <img className="miniImg" src="" />
          <img className="miniImg" src="" />
          <img className="miniImg" src="" />
        </div>

        <div className="container">
          <h2>item 1</h2>
          <p className="description">
            Ignorant saw her her drawings marriage laughter. Case oh an that or
            away sigh do here upon. Acuteness you exquisite ourselves now end
            forfeited. Enquire ye without it garrets up himself. Interest our
            nor received followed was. Cultivated an up solicitude mr
            unpleasant. In up so discovery my middleton eagerness dejection
            explained. Estimating excellence ye contrasted insensible as. Oh up
            unsatiable advantages decisively as at interested. Present suppose
            in esteems in demesne colonel it to. End horrible she landlord
            screened stanhill. Repeated offended you opinions off dissuade ask
            packages screened. She alteration everything sympathize impossible
            his get compliment. Collected few extremity suffering met had
            sportsman. Warmly little before cousin sussex entire men set.
            Blessing it ladyship on sensible judgment settling outweigh. Worse
            linen an of civil jokes leave offer. Parties all clothes removal
            cheered calling prudent her. And residence for met the estimable
            disposing. Mean if he they been no hold mr. Is at much do made took
            held help. Latter person am secure of estate genius at.{" "}
          </p>
          <p>50$</p>
          <button className="hideShow">Hide/Show</button>
          <button className="contactUs">contact us</button>
        </div>
      </div>
    );
  }
}
export default modalWindow;
