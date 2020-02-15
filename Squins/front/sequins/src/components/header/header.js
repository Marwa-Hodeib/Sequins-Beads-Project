import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";
import {Button,FormControl, Form} from 'react-bootstrap'


function Header(){

    return(
    <>
    <div className="header_div">
      <NavLink to="/" className="header_navlink">Home</NavLink>
      <NavLink to="/gallery" className="header_navlink">Gallery</NavLink>
      <NavLink to="/about" className="header_navlink">About</NavLink>
      <NavLink to="/contact" className="header_navlink">Contact us</NavLink>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    </div>
    </>
    );
}

export default Header;