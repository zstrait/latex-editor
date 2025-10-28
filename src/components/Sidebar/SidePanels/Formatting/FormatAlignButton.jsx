function FormatAlignButton({ alignment, currentAlignment, changeAlignment }) {
    const isActive = alignment === currentAlignment;

    return (
        <>
            <button
                className={`align-${alignment}-button format-button ${isActive ? 'active' : ''}`}
                onClick={() => changeAlignment(alignment)}
            >
            </button>
        </>
    )
}

export default FormatAlignButton;