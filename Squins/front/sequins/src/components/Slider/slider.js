import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Imge1 from "../../assets/images/image1-1.jpg";
import Imge3 from "../../assets/images/image1-2.jpeg";
import Imge2 from "../../assets/images/image2-1.jpg";
import Imge4 from "../../assets/images/image2-2.jpg";
import "../../App.css"
import "./slider.css"
class Slider extends Component{
  constructor() {
    super();
    this.state = {
      list1:[Imge1,Imge2],
      list2:[Imge3,Imge4]
    }
  }
  render(){
    return(
    <>
    {this.props.value=="first"?
     <Carousel interval={3000} pauseOnHover={false} touch={false} indicators={false} wrap={true}>

     {this.state.list1.map((task, index) => 
              <Carousel.Item>
                 <img
              src={task}
              alt="fff"
              className="slider_carousel_image"
            />
                </Carousel.Item>
             
           )}
        </Carousel>:
        <Carousel interval={3000} pauseOnHover={false} touch={false} indicators={false} wrap={true}>

{this.state.list2.map((task, index) => 
         <Carousel.Item>
            <img
         src={task}
         alt="fff"
         className="slider_carousel_image"
       />
           </Carousel.Item>
        
      )}
   </Carousel>}
   

    
   
    </>
    );
  }
}
export default Slider;