import React, { Component } from 'react';
import { Carousel, Image } from 'grommet';
import Img from "../../assests/images/5345908_orig.jpg";

 class Carousels extends Component {
  state = {}

  render() {
    return (
      <>
        <Carousel infinite={true} autoplay={true} autoplaySpeed>
          <Image src={Img}/>
          <Image src='//v2.grommet.io/assets/IMG_4245.jpg' />
          <Image src='//v2.grommet.io/assets/IMG_4210.jpg' />
        </Carousel>
      </>
    );
  }
}
export default Carousels;
