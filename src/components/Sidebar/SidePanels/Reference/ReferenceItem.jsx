function ReferenceItem({ symbol, command }) {

    const handleCopyClick = () => {
        // copyText(command);
        return;
    }

    return (
        <>
            <div className="reference-item">
                <div className="reference-symbol">{symbol}</div> : 
                <div className="reference-command">{command}</div>
                <button className="copy-reference-button" onClick={() => handleCopyClick()}>copy</button>
            </div>
        </>
    )
}

export default ReferenceItem;