import React from "react";
import Navbar from "../../components/navbar/navbar";
import Collection from "../../components/collection/collection";
import Slider from "../../components/Slider/slider";
export default function Home(){
    return (
      <>
      <p>Home </p>
      <Slider value="first"/>
      <Navbar />
      <Slider value="second"/>
      <Collection />
     
      </>
    );
  }