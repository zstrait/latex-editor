function SymbolsMenu({ onCategoryClick , activeCategory}) {
    return (
        <>
            <div className="symbols-menu">
                <button
                    className={`symbols-category operators ${activeCategory === 'Operators' ? 'active' : ''}`}
                    onClick={() => onCategoryClick('Operators')}
                >
                    Operators
                </button>
                <div className="category-separator"></div>
                <button
                    className={`symbols-category greek ${activeCategory === 'Greek' ? 'active' : ''}`}
                    onClick={() => onCategoryClick('Greek')}
                >
                    Greek
                </button>
                <div className="category-separator"></div>
                <button
                    className={`symbols-category structures ${activeCategory === 'Structures' ? 'active' : ''}`}
                    onClick={() => onCategoryClick('Structures')}
                >
                    Structures
                </button>
            </div>
        </>
    )
}

export default SymbolsMenu;