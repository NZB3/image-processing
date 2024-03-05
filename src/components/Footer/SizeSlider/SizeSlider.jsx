import {useEffect, useState} from "react";
import './SizeSlider.css';

export function SizeSlider({show, setImageSize}) {
    const [size, setSize] = useState(100);

    useEffect(() => {
        if (!show) {
            setSize(100);
        }
    }, [show])

    const handleSizeChange = (e) => {
        setSize(e.target.value);
        setImageSize({sizePercentage: size});
    }

    if (show) {
        return (
            <>
                <div className='size-slider'>
                    <label htmlFor="size-slider__input">{size}%</label>
                    <input
                        type="range"
                        min="1"
                        max="200"
                        value={size}
                        className="size-slider__input"
                        onChange={handleSizeChange}
                    />
                </div>
            </>
        )
    }
}