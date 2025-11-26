import { useState } from 'react';
import Switch from "react-switch";
import SymbolsMenu from "./SymbolsMenu";
import SymbolsContent from './SymbolsContent';
import { symbolsData } from '../../../../data/symbolsData';

function SymbolsPanel({ onInsertText, onClosePanel }) {
    const [activeCategory, setActiveCategory] = useState('Operators');
    const [checked, setChecked] = useState(false);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        console.log(subcategories);
    };

    let subcategories = symbolsData[activeCategory];

    const onChange = () => {
        setChecked(!checked);
    }

    return (
        <>
            <div className="symbols-panel panel-content">
                <div className="symbols-header">
                    <div className="panel-title">Symbols</div>
                    <div className="symbols-preview-container">
                        <span className="preview-toggle-label">Previews</span>
                        <Switch
                            checked={checked}
                            onColor={'#576E86'}
                            onHandleColor={'#9CC8F5'}
                            uncheckedIcon={checked}
                            checkedIcon={checked}
                            onChange={onChange}
                            height={20}
                            width={50}
                            handleDiameter={18}
                        />
                    </div>
                </div>

                <div className="symbols-content-container">
                    <SymbolsMenu
                        onCategoryClick={handleCategoryClick}
                        activeCategory={activeCategory}
                    />
                    <SymbolsContent
                        subcategories={subcategories}
                        onInsertText={onInsertText}
                        onClosePanel={onClosePanel}
                    />
                </div>
            </div>
        </>
    )
}

export default SymbolsPanel;