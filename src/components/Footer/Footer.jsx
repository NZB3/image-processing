import React, {useEffect, useState} from 'react';
import './Footer.css';
import {SizeSlider} from "./SizeSlider/SizeSlider";

function Size({selectedImage}) {
    if (selectedImage) {
        return (
            <div className='size'>
                <span className='footer__resolution'>size: {selectedImage.width} x {selectedImage.height}</span>
            </div>
        )
    }
}

function Color({color}) {
    if (color) {
        return (
            <div className='color-data'>
                <div
                    className='color-data__color-preview'
                    style={{
                        backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`
                    }}
                ></div>
                <div className="color-data__rgb">
                    <span className='color-data__item'>r: {color.red}</span>
                    <span className='color-data__item'>g: {color.green}</span>
                    <span className='color-data__item'>b: {color.blue}</span>
                </div>
            </div>
        )
    }
}

function CursorPosition({position}) {
    if (position) {
        return (
            <div className='cursor-position'>
                <span>x: {position.x}</span>
                <span>y: {position.y}</span>
            </div>
        )
    }
}

function Footer({pixelData, selectedImage, setImageSettings}) {
    const [color, setColor] = useState(null)
    const [position, setPosition] = useState(null);
    const [showSizeSlider, setShowSizeSlider] = useState(false);

    useEffect(() => {
        if (!pixelData) return;
        setColor(pixelData.color);

        setPosition(pixelData.position)
    }, [pixelData]);

    useEffect(() => {
        if (!selectedImage) {
            setShowSizeSlider(false)
            return;
        }
        setColor(null);
        setPosition(null);
        setShowSizeSlider(true);
    }, [selectedImage]);

    return (
        <footer className="footer">
            <Size className='footer__size' selectedImage={selectedImage}></Size>
            <div className='footer__pixel-data'>
                <CursorPosition className='footer__cursor-position' position={position}></CursorPosition>
                <Color className='footer__color-data' color={color}></Color>
            </div>
            <SizeSlider className='footer__size-slider' show={showSizeSlider} setImageSize={setImageSettings}></SizeSlider>
        </footer>
    )
}

export default Footer;