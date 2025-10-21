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
                        <div className="fonts-dropdown">Default Font</div>
                        <div className="font-sizing-container">
                            <div className="font-siz format-input">12pt</div>
                            <div className="font-size-controls">
                                <button className="increase-button control-button">+</button>
                                <button className="decrease-button control-button">-</button>
                            </div>
                        </div>
                    </div>
                    <div className="formatting-container">
                        <div className="text-styling-container">
                            <button className="bold-button format-button">B</button>
                            <button className="italic-button format-button">I</button>
                        </div>
                        <div className="text-align-container">
                            <button className="align-left-button format-button"></button>
                            <button className="align-center-button format-button"></button>
                            <button className="align-right-button format-button"></button>
                        </div>
                        <div className="line-spacing-container">
                            <div className="line-spacing format-input">1.25</div>
                            <div className="line-spacing-controls">
                                <button className="increase-button control-button">+</button>
                                <button className="decrease-button control-button">-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FormatPanel