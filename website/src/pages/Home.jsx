
import React from 'react';

import Navbar from '../Navbar';



function Home(props) {


 

    return (
    <>
    <Navbar />
    
    <img src="./astronaut.png"  class="background"/>
    
    <div class="home-page">

    
<div class="home-box">
       <div class="box">  
       
         <h1 class="Welcome">
            <font class="w" color="#EFE3D0">W</font>
            <font class="e" color="#EFE3D0">e</font>
            <font class="l" color="#EFE3D0">l</font>
            <font class="c" color="#EFE3D0">c</font>
            <font class="o" color="#EFE3D0">o</font>
            <font class="m" color="#EFE3D0">m</font>
            <font class="e" color="#EFE3D0">e</font>
            <font           color="#EFE3D0"> </font>
            <font class="t" color="#EFE3D0">t</font>
            <font class="o" color="#EFE3D0">o</font>
            <font           color="#EFE3D0"> </font> 
            <font class="s" color="#EFE3D0">s</font>
            <font class="p" color="#EFE3D0">p</font>
            <font class="a" color="#EFE3D0">a</font>
            <font class="c" color="#EFE3D0">c</font>
            <font class="e" color="#EFE3D0">e</font>

                </h1>
            </div>
           
           <div className='welcom-message-box'>
            <h2 className='welcom-message '>{props.name ? `${props.name}` : "Login please"}</h2>
            </div>
            <div class = "enter_button">
           <a href='/Selection' > <button  class="button-enter"> <a class="button_text">Enter</a></button></a>
            </div>
        </div>
    </div>
    </>
   
   );
}

export default Home;