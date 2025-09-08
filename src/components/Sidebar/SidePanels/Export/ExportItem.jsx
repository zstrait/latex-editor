function ExportItem({ option, type, onClick }) {
    return (
        <>
            <div className="export-item">
                <div className="export-option">{option}</div>
                <button className="export-button" onClick={onClick}>{type}</button>
            </div>
        </>
    )
}

export default ExportItem;