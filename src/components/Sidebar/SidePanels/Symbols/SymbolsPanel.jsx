import Switch from "react-switch";
import SymbolsMenu from "./SymbolsMenu";
import SymbolsItem from "./SymbolsItem";


function SymbolsPanel({ checked, onChange }) {
    return (
        <>
            <div className="symbols-panel panel-content">
                <div className="symbols-header">
                    <div className="panel-title">Symbols & Operators</div>
                    <div className="symbols-preview-container">
                        <span className="preview-toggle-label">Previews</span>
                        <Switch
                            checked={checked}
                            onColor={'#576E86'}
                            onHandleColor={'#9CC8F5'}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            onChange={onChange}
                            height={20}
                            width={52}
                            handleDiameter={18}
                        />
                    </div>
                </div>

                <div className="symbols-menu-container">
                    <SymbolsMenu />
                </div>

            </div>
        </>
    )
}

export default SymbolsPanel;