function ReferenceItem({ icon, code }) {

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(code);
            console.log("Code copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy text.", err);
        }
    }

    return (
        <>
            <div className="reference-item">
                <div className={`reference-symbol ${icon}`}></div>
                <div className="reference-command">{code}</div>
                <button className="copy-reference-button" onClick={() => handleCopyClick()}>copy</button>
            </div>
        </>
    )
}

export default ReferenceItem;