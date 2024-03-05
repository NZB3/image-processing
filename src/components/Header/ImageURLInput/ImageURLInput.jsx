import {useEffect} from "react";

export function ImageURLInput(props) {
    const handleOpen = async () => {
        const url = document.querySelector('.image-url-input__input').value;
        try {
            new URL(url);
        } catch (error) {
            alert("Invalid image url")
            return;
        }

        const image = await fetchImage(url);
        props.setSelectedImage(image);

    }

    useEffect(() => {
        if (props.clear) {
            clearInput();
        }
    },[props.clear])

    return (
        <div className='image-url-input'>
            <input
                type="text"
                className="image-url-input__input"
                placeholder="Enter an image URL"
            />
            <button
                className="image-url-input__button"
                onClick={handleOpen}
            >
                Load
            </button>
        </div>
    )
}

function fetchImage(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            return URL.createObjectURL(blob);
        }).then(url => {
            const image = new Image();
            image.src = url;
            return image;
        });
}

function clearInput() {
    const input = document.querySelector(".image-url-input__input")
    input.value = ""
}