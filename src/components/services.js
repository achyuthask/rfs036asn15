import React from "react";
import Navbar from "./navbar";
import './common.css';
import { useContext } from "react";
import Themecontex from "../contex";

const Services =() => {

    const {Islight} =useContext(Themecontex)
    return(
        <>
        <div className={Islight?"dark":"light"}>
        <Navbar />
        <h1>our services are not available</h1>
        </div>
        </>
    );
}

export default Services;
