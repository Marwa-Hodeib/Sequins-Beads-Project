import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "../../App.css";
import "./about-slider.css";
class AboutSlider extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    render(){
    return(
    <>
     
     <Carousel interval={6000} pauseOnHover={false} indicators={true} wrap={true}>
     {this.state.list.map((task, index) => 
        <Carousel.Item>
            {/* <img
              src={task}
              alt="fff"
              className="about-slider_image"
            /> */}
        </Carousel.Item>
        )}
    </Carousel>
  
   </>
    );
  }
}

export default AboutSlider;