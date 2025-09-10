import SymbolsButton from "./SymbolsButton";

function SymbolsItem({ subcategory, symbols }) {
    return (
        <>
            <div className="symbols-item-container">
                <span className="symbols-subcategory">{subcategory}</span>
                <div className="symbols-buttons-container">
                    {symbols.map((symbol) => (
                        <SymbolsButton
                            icon={symbol.icon}
                            // code={symbol.code}
                            key={symbol.code}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SymbolsItem;