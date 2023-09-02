import React from "react";
import Navbar from "./navbar";
import './common.css';
import { useContext } from "react";
import Themecontex from "../contex";


const Contact =() => {
    const {Islight} =useContext(Themecontex)

    return(
        <>
          <div className={Islight?"dark":"light"}>
        <Navbar />
        <h1>CONTACT ME help@geekster</h1>
        </div>
        </>
    );
}

export default Contact;
