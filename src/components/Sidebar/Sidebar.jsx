import { useState, useRef } from 'react';
import SidebarButton from './SidebarButton.jsx';
import SidebarItem from './SidebarItem.jsx';
import SymbolsPanel from './SidePanels/Symbols/SymbolsPanel.jsx'
import FormatPanel from './SidePanels/Formatting/FormatPanel.jsx';
import ExportPanel from './SidePanels/Export/ExportPanel.jsx';
import FilesPanel from './SidePanels/Files/FilesPanel.jsx';
import SettingsPanel from './SidePanels/Settings/SettingsPanel.jsx';

function Sidebar({
    onCompileClick,
    isLiveRendering,
    onLiveRenderingToggle,
    isSyntaxHighlighting,
    onSyntaxHighlightingToggle,
    isAutoNewline,
    onAutoNewlineToggle,
    onExportTxt,
    onInsertText,
    fontSize,
    lineSpacing,
    handleControllerInc,
    handleControllerDec,
    font,
    handleFontChange,
    alignment,
    handleAlignmentChange,
    currentStyle,
    handleStyleChange,
    handleResetFormat
}) {

    const [activePanel, setActivePanel] = useState(null);
    const sidebarRef = useRef(null);

    const handlePanelToggle = (panelName) => {
        setActivePanel(prev => (prev === panelName ? null : panelName));
    };

    const placeholderContent = (title) => (
        <div className="placeholder-panel panel-content">
            <div className="panel-title">{title}</div>
            Coming Soon...
        </div>
    );

    return (

        <div className="sidebar" ref={sidebarRef}>
            <div className="tools-container">
                <SidebarItem
                    name="help"
                    icon="help"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                >
                    {placeholderContent("Help")}
                </SidebarItem>

                <SidebarItem
                    name="symbols"
                    icon="symbols"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                    panelClassName="symbols-panel-container"
                >
                    <SymbolsPanel
                        onInsertText={onInsertText}
                        onClosePanel={() => handlePanelToggle(null)}
                    />
                </SidebarItem>

                <SidebarItem
                    name="format"
                    icon="format"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                    panelClassName="format-panel-container"
                >
                    <FormatPanel
                        font={font}
                        fontSize={fontSize}
                        lineSpacing={lineSpacing}
                        currentAlignment={alignment}
                        handleControllerInc={handleControllerInc}
                        handleControllerDec={handleControllerDec}
                        handleFontChange={handleFontChange}
                        handleAlignmentChange={handleAlignmentChange}
                        currentStyle={currentStyle}
                        handleStyleChange={handleStyleChange}
                        handleResetFormat={handleResetFormat}
                    />

                </SidebarItem>

                <SidebarItem
                    name="cheatsheet"
                    icon="cheatsheet"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                >
                    {placeholderContent("Cheatsheet")}
                </SidebarItem>
            </div>

            {!isLiveRendering && (
                <SidebarButton icon="compile" onClick={onCompileClick} />
            )}

            <div className="utilities-container">
                <SidebarItem
                    name="export"
                    icon="export"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                    panelClassName="export-panel-container"
                >
                    <ExportPanel onExportTxt={onExportTxt} />
                </SidebarItem>

                <SidebarItem
                    name="files"
                    icon="files"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                    panelClassName="files-panel-container"
                >
                    {placeholderContent("Files")}
                    {/* <FilesPanel /> */}
                </SidebarItem>

                <SidebarItem
                    name="settings"
                    icon="settings"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                >
                    <SettingsPanel
                        isLiveRendering={isLiveRendering}
                        onLiveRenderingToggle={onLiveRenderingToggle}
                        isSyntaxHighlighting={isSyntaxHighlighting}
                        onSyntaxHighlightingToggle={onSyntaxHighlightingToggle}
                        isAutoNewline={isAutoNewline}
                        onAutoNewlineToggle={onAutoNewlineToggle}
                    />
                </SidebarItem>
            </div>


            {/* <div className="sidebar-toggle">(x)</div> */}
        </div>
    );
}

export default Sidebar;