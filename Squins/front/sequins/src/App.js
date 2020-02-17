import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Gallery from "./pages/gallery/gallery";
import Contact from "./pages/contact_us /contact_us";
import Slider from "./components/Slider/slider";

function App() {
  return (
    <div className="App">
     
      <Nav/>
      <Caro/>
    </div>
  );
}

export default App;
