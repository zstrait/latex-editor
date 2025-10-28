import FormatAlignButton from "./FormatAlignButton";
import FormatController from "./FormatController";
import FormatFontMenu from "./FormatFontMenu";
import FormatStylingButton from "./FormatStylingButton";

function FormatPanel() {

    return (
        <>
            <div className="format-panel panel-content">
                <div className="format-header">
                    <div className="panel-title">Formatting</div>
                    <button className="reset-format"></button>
                </div>

                <div className="format-content-container">
                    <div className="fonts-container">
                        <FormatFontMenu />
                        <FormatController
                            controlling="font-size"
                            initValue={12}
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
                            initValue={1.25}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormatPanel;