import React from 'react';
import Navbar from '../Navbar';

function Selection() {
    return (
    <>
    <Navbar/>
    <img src="./astronaut.png"  class="background"/>
        <div class="home-Selection">
          
            <div class="game-box"> 
               
                <div class="game-box-main"> 
                   
                    <a href='/Game'>
                        <img src="./first-man-moon-apollo-vector-flat-illustration-nasa-153691757.jpg" alt="game"/>  
                            <div class="game-text"> 

                                <h2 class="game-txt"> Game</h2>

                            </div>
                    </a>
             
                </div> 
           
            </div>
        
            
            <div class="form-box">  <div class="form-box-main"></div> </div>
        
            <div class="acoount-box"> <div class="acoount-box-main"></div> </div>

        </div>
        
        
      
      
    </>
   
   
   
   
    );



}

export default Selection;