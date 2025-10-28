function FormatController({ controlling, initValue  }) {
    return (
        <>
            <div className={`${controlling}-container`}>
                <div className={`${controlling}-icon controller-icon`}></div>
                <div className={`${controlling} format-input`}>{initValue}</div>
                <div className={`${controlling}-controls`}>
                    <button className="increase-button control-button">+</button>
                    <button className="decrease-button control-button">-</button>
                </div>
            </div>
        </>
    )
}

export default FormatController;