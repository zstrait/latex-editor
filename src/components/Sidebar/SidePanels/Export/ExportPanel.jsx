import ExportItem from "./ExportItem";

function ExportPanel({ onExportTxt }) {
    return (
        <>
            <div className="export-panel panel-content">
                <div className="panel-title export-title">Export as:</div>
                <div className="export-content">
                    <ExportItem
                        option="Rendered PDF"
                        type=".pdf"
                    />
                    <ExportItem
                        option="LaTeX File"
                        type=".tex"
                    />
                    <ExportItem
                        option="Raw Plaintext"
                        type=".txt"
                        onClick={onExportTxt}
                    />

                </div>
            </div>

        </>
    )
}

export default ExportPanel;