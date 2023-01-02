import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar(props) {
  return (
<header>

    <a class= "logo"> PLace Holder</a>

    <nav>
      <ul>
       
        
        <li><a class="home-nav" href='/'>Home</a>  </li>
        <li><a href='/Selection'>Selection</a> </li>
        <li><a href='/Game'>Game</a> </li>
        <li><a href='/Forums'>Forums</a> </li>
        <li><a href='/Profile'>Profile</a> </li>
      </ul>
    </nav>
 </header>
 );
}

export default Navbar;