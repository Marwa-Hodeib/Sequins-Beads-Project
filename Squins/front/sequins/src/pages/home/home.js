import React from "react";
import Header from "../../components/header/header";
import Collection from "../../components/collection/collection";
import Slider from "../../components/Slider/slider";
export default function Home(){
    return (
      <>
      <Slider value="first"/>
      <Header />
      <Slider value="second"/>
      <Collection />
     
      </>
    );
  }