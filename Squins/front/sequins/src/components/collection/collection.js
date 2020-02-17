import React from "react";
import "./collection.css";
import {Container, Row, Col} from 'react-bootstrap';
import Image1 from "../../assets/images/84d71e19-1e9a-4523-8579-09db4e849a2e.jpg"
export default class Collection extends React.Component {
  state = {
  };
  render() {
    return (
      <>
      <div className="collection_div">
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
     <Row>
       <Col>
       <div class="collection_col1">
         <img src={Image1} alt="Mountains" class="collection_col_image"/>
         <div class="collection_col_div">
           <div class="collection_col_div_text">Description about an IMAGE</div>
           </div>
          </div>
       </Col>
       <Col >
         <Row>
           <Col>
           <div class="collection_col2">
         <img src={Image1} alt="Mountains" class="collection_col_image"/>
         <div class="collection_col_div">
           <div class="collection_col_div_text">Descriptionn about an IMAGE</div>
           </div>
          </div>
           </Col>
           <Col >
           <div class="collection_col2">
         <img src={Image1} alt="Mountains" class="collection_col_image"/>
         <div class="collection_col_div">
           <div class="collection_col_div_text">Descriptionn about an IMAGE</div>
           </div>
          </div>
           </Col>
         </Row>
         <Row>
           <Col>
           <div class="collection_col3">
         <img src={Image1} alt="Mountains" class="collection_col_image"/>
         <div class="collection_col_div">
           <div class="collection_col_div_text">Descriptionn about an IMAGE</div>
           </div>
          </div>

           </Col>
         </Row>
       </Col>
     </Row>
   </Container>
</div>
      </>
    );
  }
}