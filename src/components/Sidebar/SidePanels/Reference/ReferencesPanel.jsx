import ReferenceToC from "./ReferenceToC";
import ReferenceSection from "./ReferenceSection";
import { symbolsData } from '../../../../data/symbolsData';

function ReferencesPanel() {
    let operators = symbolsData['Operators'];
    let logic = symbolsData['Logic'];
    let greek = symbolsData['Greek'];
    let structures = symbolsData['Structures'];
    let other = symbolsData['Other'];


    return (
        <>
            <div className="references-panel panel-content">
                <div className="panel-title">Reference Sheet</div>
                <div className="references-content">
                    <ReferenceToC />
                    <div className="reference-sheet">
                        <ReferenceSection
                            sectionId="operators-section"
                            section="Operators"
                            items={operators}
                        />
                        <ReferenceSection
                            sectionId="logic-section"
                            section="Logic & Sets"
                            items={logic}
                        />
                        <ReferenceSection
                            sectionId="greek-section"
                            section="Greek"
                            items={greek}
                        />
                        <ReferenceSection
                            sectionId="structures-section"
                            section="Structures"
                            items={structures}
                        />
                        {/* <ReferenceSection
                            sectionId="formatting-section"
                            section="Formatting"
                        /> */}
                        <ReferenceSection
                            sectionId="other-section"
                            section="Other"
                            items={other}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReferencesPanel;