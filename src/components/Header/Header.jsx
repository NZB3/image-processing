import React, {useEffect} from "react";
import "./Header.css";
import OpenButton from "./OpenButton/OpenButton";
import {ImageURLInput} from "./ImageURLInput/ImageURLInput";
import {ClearButton} from "./ClearButton/ClearButton";

function Header({selectedImage, setSelectedImage}) {
    const [clear, setClear] = React.useState(false);
    useEffect(() => {
        if (clear) {
            setClear(false);
        }
    }, [clear])
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__load-image">
                    <OpenButton     setSelectedImage={setSelectedImage}/>
                    <ImageURLInput  setSelectedImage={setSelectedImage} clear={clear}/>
                    <ClearButton    setSelectedImage={setSelectedImage} setClear={setClear}/>
                </div>
            </div>
        </header>
    )
}

export default Header;