import React from "react";
import "./NavBar.scss";

function NavBar(props) {
    return (
        <button 
        className="nav-bar" 
        onClick={props.returnToHome}>
            imma DINGUS
        </button>
    )
}

export default NavBar;