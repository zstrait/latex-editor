import { useState } from "react"
import FormatAlignButton from "./FormatAlignButton";
import FormatController from "./FormatController";
import FormatFontMenu from "./FormatFontMenu";
import FormatStylingButton from "./FormatStylingButton";

function FormatPanel({ font, fontSize, lineSpacing, handleControllerInc, handleControllerDec, handleResetFormat, handleFontChange }) {
    const [isRotating, setIsRotating] = useState(false);

    const handleResetClick = () => {
        handleResetFormat();
        setIsRotating(true);

        setTimeout(() => {
            setIsRotating(false);
        }, 400);
    };

    return (
        <>
            <div className="format-panel panel-content">
                <div className="format-header">
                    <div className="panel-title">Formatting</div>
                    <button className={`reset-format ${isRotating ? "rotating" : ""}`} onClick={() => handleResetClick()}></button>
                </div>

                <div className="format-content-container">
                    <div className="fonts-container">
                        <FormatFontMenu font={font} handleFontChange={handleFontChange} />
                        <FormatController
                            controlling="font-size"
                            value={fontSize}
                            handleControllerInc={handleControllerInc}
                            handleControllerDec={handleControllerDec}
                        />
                    </div>
                    <div className="formatting-container">
                        <div className="text-styling-container">
                            <FormatStylingButton
                                style="bold"
                                iconLetter="B"
                            />
                            <FormatStylingButton
                                style="italic"
                                iconLetter="I"
                            />
                        </div>
                        <div className="text-align-container">
                            <FormatAlignButton alignment="left" />
                            <FormatAlignButton alignment="center" />
                            <FormatAlignButton alignment="right" />
                        </div>
                        <FormatController
                            controlling="line-spacing"
                            value={lineSpacing}
                            handleControllerInc={handleControllerInc}
                            handleControllerDec={handleControllerDec}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormatPanel;