import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";
import {Button,FormControl, Form} from 'react-bootstrap'


function Header(){

    return(
    <>
    <div className="header_div">
      <div className="header_div_link">
      <a><span><NavLink to="/" className="header_navlink">Home</NavLink></span></a>
      <a><span><NavLink to="/gallery" className="header_navlink">Gallery</NavLink></span></a>
      <a><span><NavLink to="/about" className="header_navlink">About</NavLink></span></a>
      <a><span><NavLink to="/contact" className="header_navlink">Contact us</NavLink></span></a>
      </div>
      <Form inline>
      <FormControl type="text" placeholder="Search" />
      <Button variant="outline-success" className="header_button">Search</Button>
    </Form>
    </div>
    </>
    );
}

export default Header;