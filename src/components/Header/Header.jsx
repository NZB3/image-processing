import React from "react";
import "./Header.css";
import OpenButton from "../ui/OpenButton/OpenButton";

function Header({ setSelectedFile }) {
    return (
        <header className="header">
            <div className="header__container">
                <OpenButton setSelectedFile={setSelectedFile}/>
                <h1 className="header__title">React App</h1>
            </div>
        </header>
    )
}

export default Header;