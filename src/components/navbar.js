import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './common.css';
import Themecontex from "../contex"; 

const Navbar = () => {
    const {Islight,changetheme} =useContext(Themecontex)
     return(
    <div>
    <h1>Geekster</h1>
    <Link to="/">Home</Link> <br></br>
    <Link to="/contact">contact</Link><br></br>
    <Link to="/services">services</Link><br>
    </br>
    <button onClick={()=>{changetheme()}}>Toggle{Islight?"dark":"light"}</button>
   </div>
   );
}

export default Navbar;
