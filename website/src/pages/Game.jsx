import React from 'react';
import { useEffect } from "react";
import Navbar from '../Navbar';
function Game(props) {


    useEffect(() => {
        console.log("coeeeeeeeee.")
         });


    return (
        <>
        <Navbar/>
        <img src="./astronaut.png"  class="background"/>
         <div class="Game-bacground">
          
            <div class="Game-border">
            
            </div>
        
         </div>
       
        </>
    );
}

export default Game;