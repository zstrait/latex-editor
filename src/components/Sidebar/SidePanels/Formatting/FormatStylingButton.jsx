function FormatStylingButton({ style, iconLetter, currentStyle, handleStyleChange }) {
    const isActive = style === currentStyle;

    return (
        <>
            <button
                className={`${style}-button format-button ${isActive ? "active" : ""}`}
                onClick={() => handleStyleChange(style)}
            >
                {iconLetter}
            </button>
        </>
    )
}

export default FormatStylingButton;