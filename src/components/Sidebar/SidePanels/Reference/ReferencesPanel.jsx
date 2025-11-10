import ReferenceItem from "./ReferenceItem";
import ReferenceToC from "./ReferenceToC";

function ReferencesPanel() {
    return (
        <>
            <div className="references-panel panel-content">
                <div className="panel-title">Reference Sheet</div>
                <div className="references-content">
                    <ReferenceToC />
                    <div className="reference-sheet">
                        <div className="reference-section">
                            <div className="section-title">Arithmetic</div>
                            <div className="section-content">
                                <div className="reference-items-container left-references">
                                    <ReferenceItem
                                        symbol="+"
                                        command="\plus"
                                    />
                                    <ReferenceItem
                                        symbol="≠"
                                        command="\neq"
                                    />
                                </div>
                                <div className="reference-items-container right-references">
                                    <ReferenceItem
                                        symbol="≥"
                                        command="\qeq"
                                    />
                                    <ReferenceItem
                                        symbol="≤"
                                        command="\leq"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="reference-section">
                            <div className="section-title">OtherSample</div>
                            <div className="section-content">
                                <div className="reference-items-container">
                                    <ReferenceItem
                                        symbol="≥"
                                        command="\qeq"
                                    />
                                    <ReferenceItem
                                        symbol="≤"
                                        command="\leq"
                                    />
                                </div>
                                <div className="reference-items-container right-references">
                                    <ReferenceItem
                                        symbol="+"
                                        command="\plus"
                                    />
                                    <ReferenceItem
                                        symbol="≠"
                                        command="\neq"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferencesPanel;