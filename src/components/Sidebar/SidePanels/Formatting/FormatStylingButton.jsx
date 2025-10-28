function FormatStylingButton({ style, iconLetter }) {
    return (
        <>
            <button className={`${style}-button format-button`}>{iconLetter}</button>
        </>
    )
}

export default FormatStylingButton;