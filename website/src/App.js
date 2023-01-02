import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import Home from './pages/Home'
import Add from './pages/Add'
import Selection from './pages/Selection'
import Game from './pages/Game'
import Login from './pages/Login'
import Register from './pages/Register'
import Forums from './pages/Forums'
import Eddit from './pages/Edit';
import View from './pages/View';
import Profile from './pages/Profile';
import { auth } from "./firebase-config";

function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);





  return (
    <>
    
     
    
      
      <Routes>
          <Route path='/home' element={<Home name={userName} />}/>
          <Route path='/' element={<Register/>}/>
          <Route path='/Add' element={<Add name={userName}/>}/>
          <Route path='/Selection' element={<Selection/>}/>
          <Route path='/Game' element={<Game name={userName}/>}/>
          <Route path='/Log_in' element={<Login name={userName}/>}/>
          <Route path='/Forums' element={<Forums name={userName}/>}/>
          <Route path='/Add' element={<Add name={userName}/>}/>
          <Route path= '/edit/:id' element={<Eddit name={userName}/>}/>
          <Route path='/view/:id' element={<View name={userName}/>}/>
          <Route path='/Profile' element={<Profile name={userName} />}/>

      </Routes>
    </>
  );
}

export default App;
