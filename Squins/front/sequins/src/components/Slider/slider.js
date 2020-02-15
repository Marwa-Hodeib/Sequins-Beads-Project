import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Imge1 from "../../assets/images/84d71e19-1e9a-4523-8579-09db4e849a2e.jpg";
import Imge2 from "../../assets/images/bb9ada3f3064dc11b8760688a02e7982.jpg";
import Imge3 from "../../assets/images/Bohemia-Alloy-Multi-layers-Gold-Silver-Beads-Sequins-3-Pieces-Set-Bracelet-For-Women-Jewelry-Foot-Ch-32946889582-8222-843x800.jpeg";
import Imge4 from "../../assets/images/generous.jpg";
import Imge5 from "../../assets/images/rBVaVV2hRlKAEixkAAGXb9-eeBc292.jpg";
import "../../App.css"
import "./slider.css"
class Slider extends Component{
  constructor() {
    super();
    this.state = {
      list1:[Imge1,Imge2,Imge3],
      list2:[Imge4,Imge5,Imge3],
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
        <Carousel interval={3000} pauseOnHover={false} touch={false} indicators={true} wrap={true}>

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