import SymbolsButton from "./SymbolsButton";

function SymbolsItem({ subcategory, symbols, onInsertText, onClosePanel }) {
    return (
        <>
            <div className="symbols-item-container">
                <span className="symbols-subcategory">{subcategory}</span>
                <div className="symbols-buttons-container">
                    {symbols.map((symbol) => (
                        <SymbolsButton
                            key={symbol.code}
                            icon={symbol.icon}
                            code={symbol.code}
                            onInsertText={onInsertText}
                            onClosePanel={onClosePanel}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SymbolsItem;