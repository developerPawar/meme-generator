import React from "react";
import navLogo from "../images/Troll Face.png"
export default function Header() {
    return (
        <header className="header">
            <img
                src={navLogo}
                className="header--image"
                alt="logo here"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}