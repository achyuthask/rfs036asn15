import React from "react";
import { Routes  , Route } from "react-router-dom";
import Home from "./components/home";

import Contact from "./components/contact";
import Services from "./components/services";
import { useState } from "react";
import Themecontex from "./contex";


function App() {
   

  const [Islight,setIslight] =useState(true)

  const changetheme =()=>{
    setIslight((prevState)=>{
    return!prevState
  })
  }
  return (
    <Themecontex.Provider value={{Islight ,changetheme}} >
    <Routes>
      <Route path="/" element ={ <Home />} />
      <Route path="/contact"  element= {<Contact />} />
      <Route path="/services"  element= {<Services />} />
    </Routes>
    </Themecontex.Provider>
  );
}

export default App;
