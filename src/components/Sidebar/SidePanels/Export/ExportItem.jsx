function ExportItem({ option, type }) {
    return (
        <>
            <div className="export-item">
                <div className="export-option">{option}</div>
                <button className="export-button">{type}</button>
            </div>
        </>
    )
}

export default ExportItem;