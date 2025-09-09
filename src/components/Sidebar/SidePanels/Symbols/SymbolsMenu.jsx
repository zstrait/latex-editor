function SymbolsMenu() {
    return (
        <>
            <div className="symbols-menu">
                <button className="symbols-menu-category operators">Operators</button>
                <div className="category-separator"></div>
                <button className="symbols-menu-category greek">Greek</button>
                <div className="category-separator"></div>
                <button className="symbols-menu-category structures">Structures</button>
            </div>
        </>
    )
}

export default SymbolsMenu;