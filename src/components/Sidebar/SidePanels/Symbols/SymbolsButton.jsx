// function SymbolButton({ icon, code }) {
function SymbolsButton({ icon }) {

    const buttonClasses = `symbols-button ${icon || ''}`;


    return (
        <>
            <button className={buttonClasses}></button>
        </>
    )
}

export default SymbolsButton;