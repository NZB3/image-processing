export function ClearButton(props) {
    return (
        <>
            <button
                className="clear-button"
                onClick={() => {
                    props.setSelectedImage(null);
                    props.setClear(true)
                }}
            >
                Clear
            </button>
        </>
    )
}