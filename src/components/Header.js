import React from "react";
import memeIcon from "../images/meme-icon.png"

function Header(){
    return(
        <header className="header">
            <img className="header--image" src={memeIcon} alt="troll face"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Create your own meme!</h4>
        </header>
    );
}

export default Header;