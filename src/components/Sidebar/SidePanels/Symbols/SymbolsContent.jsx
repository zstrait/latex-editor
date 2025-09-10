import SymbolsItem from "./SymbolsItem";

function SymbolsContent({ subcategories }) {

    return (
        <>
            <div className="symbols-items-container">
                {subcategories.map((subcategory) => (
                    <SymbolsItem
                        subcategory={subcategory.subtitle}
                        symbols={subcategory.symbols}
                        key={subcategory.subtitle}
                    />
                ))}
            </div>
        </>
    )
}

export default SymbolsContent;