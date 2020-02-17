import React from "react";
import "./App.css";
import MW from "./pages/gallery/modalWindow/modalwindow";
import { Grommet } from "grommet";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Gallery from "./pages/gallery/gallery";
import Contact from "./pages/contact_us /contact_us";

class App extends Component {
  render() {
  return (
    <Grommet plain>
      <div className="App">
        <MW />
      </div>
    </Grommet>
    <div className="App">
     
      <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/gallery" component={Gallery}/>
           </Switch>
        </div> 
      </BrowserRouter>
      
    </div>
  );
}
}

export default App;
