import SymbolsItem from "./SymbolsItem";

function SymbolsContent({ subcategories, onInsertText, onClosePanel }) {

    return (
        <>
            <div className="symbols-items-container">
                {subcategories.map((subcategory) => (
                    <SymbolsItem
                        key={subcategory.subtitle}
                        subcategory={subcategory.subtitle}
                        symbols={subcategory.symbols}
                        onInsertText={onInsertText}
                        onClosePanel={onClosePanel}
                    />
                ))}
            </div>
        </>
    )
}

export default SymbolsContent;