import SymbolsItem from "./SymbolsItem";
import { symbolsData } from "../../../../data/symbolsData";

function SymbolsContent({ subcategories, onInsertText, onClosePanel }) {

    if (subcategories == symbolsData['Operators']) {
        subcategories = symbolsData['Operators'].concat(symbolsData['Logic']).concat(symbolsData['Other']);
    }

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