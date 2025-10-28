function FormatController({ controlling, value, handleControllerInc, handleControllerDec }) {
    return (
        <>
            <div className={`${controlling}-container`}>
                <div className={`${controlling}-icon controller-icon`}></div>
                <div className={`${controlling} format-input`}>{value}</div>
                <div className={`${controlling}-controls`}>
                    <button className="increase-button control-button" onClick={() => handleControllerInc(controlling)}>+</button>
                    <button className="decrease-button control-button" onClick={() =>handleControllerDec(controlling)}>-</button>
                </div>
            </div>
        </>
    )
}

export default FormatController;