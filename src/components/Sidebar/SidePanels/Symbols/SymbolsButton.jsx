function SymbolsButton({ icon, code, onInsertText, onClosePanel }) {
    const buttonClasses = `symbols-button ${icon || ''}`;

    const handleClick = () => {
        onInsertText(code);
        onClosePanel();
    }

    return (
        <>
            <button
                className={buttonClasses}
                onClick={handleClick}
            >
            </button>
        </>
    )
}

export default SymbolsButton;