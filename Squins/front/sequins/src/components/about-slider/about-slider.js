import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Imge1 from "../../assets/images/84d71e19-1e9a-4523-8579-09db4e849a2e.jpg";
import Imge2 from "../../assets/images/bb9ada3f3064dc11b8760688a02e7982.jpg";
import Imge3 from "../../assets/images/Bohemia-Alloy-Multi-layers-Gold-Silver-Beads-Sequins-3-Pieces-Set-Bracelet-For-Women-Jewelry-Foot-Ch-32946889582-8222-843x800.jpeg";
import "../../App.css";
import "./about-slider.css";
class AboutSlider extends Component{
    constructor(){
        super();
        this.state={
            list:[Imge1,Imge2,Imge3]
        }
    }
    render(){
    return(
    <>
     
     <Carousel interval={6000} pauseOnHover={false} indicators={true} wrap={true}>
     {this.state.list.map((task, index) => 
        <Carousel.Item>
            <img
              src={task}
              alt="fff"
              className="about-slider_image"
            />
        </Carousel.Item>
        )}
    </Carousel>
  
   </>
    );
  }
}

export default AboutSlider;