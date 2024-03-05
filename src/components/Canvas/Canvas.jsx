import React, {useEffect} from "react";
import './Canvas.css';

export function Canvas({selectedImage, setPixelData}) {
    const canvasRef = React.createRef();

    useEffect(() => {
        if (!selectedImage) {
            clearCanvas(canvasRef.current);
            return;
        }

        drawImage(selectedImage, canvasRef);
    }, [selectedImage, canvasRef]);

    const handleMouseMove = (e) => {
        if (!selectedImage) return;
        const pixelData = pick(e);
        setPixelData(pixelData);
    }

    return (
        <div className="canvas__container">
            <canvas className='canvas'
                    id='canvas'
                    ref={canvasRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => clearPixelData(setPixelData)}
            >
            </canvas>
        </div>
    )
}

function clearPixelData (setPixelData) {
    setPixelData({color: null, position: null});
}

function clearCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function drawImage(image, canvasRef) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d', {willReadFrequently: true});

    ctx.drawImage(image, 0, 0);

    canvasRef.current = canvas;

}

function pick(e) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d', {willReadFrequently: true});
    const position = getMousePos(canvas, e);
    const color = getColor(ctx, position.x, position.y);
    return {
        color: {red: color[0], green: color[1], blue: color[2]},
        position: {x: position.x, y: position.y}
    }
}

function getMousePos(canvas, e) {
    const rect = canvas.getBoundingClientRect();
    let x =  Math.ceil((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width)
    let y = Math.ceil((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
    if (y < 0) y = 0
    if (x < 0) x = 0
    return {x, y}
}

function resize(imageSize) {

}

function getColor(ctx, x, y) {
    return ctx.getImageData(x, y, 1, 1).data;
}