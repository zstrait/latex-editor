import { useState, useRef } from 'react';
import SidebarButton from './SidebarButton.jsx'
import Settings from './Settings.jsx';
import SidebarItem from './SidebarItem.jsx';

function Sidebar({
    onCompileClick,
    isLiveRendering,
    onLiveRenderingToggle,
    isSyntaxHighlighting,
    onSyntaxHighlightingToggle,
    isAutoNewline,
    onAutoNewlineToggle
}) {

    const [activePanel, setActivePanel] = useState(null);
    const sidebarRef = useRef(null);

    const handlePanelToggle = (panelName) => {
        setActivePanel(prev => (prev === panelName ? null : panelName));
    };

    const placeholderContent = (
        <div className="placeholder-panel panel-content">
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
                    {placeholderContent}
                </SidebarItem>

                <SidebarItem
                    name="symbols"
                    icon="symbols"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                >
                    {placeholderContent}
                </SidebarItem>

                <SidebarItem
                    name="formatting"
                    icon="formatting"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                >
                    {placeholderContent}
                </SidebarItem>

                <SidebarItem
                    name="cheatsheet"
                    icon="cheatsheet"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                >
                    {placeholderContent}
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
                >
                    {placeholderContent}
                </SidebarItem>

                <SidebarItem
                    name="files"
                    icon="files"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                >
                    {placeholderContent}
                </SidebarItem>

                <SidebarItem
                    name="settings"
                    icon="settings"
                    activePanel={activePanel}
                    onToggle={handlePanelToggle}
                    sidebarRef={sidebarRef}
                >
                    <Settings
                        isLiveRendering={isLiveRendering}
                        onLiveRenderingToggle={onLiveRenderingToggle}
                        isSyntaxHighlighting={isSyntaxHighlighting}
                        onSyntaxHighlightingToggle={onSyntaxHighlightingToggle}
                        isAutoNewline={isAutoNewline}
                        onAutoNewlineToggle={onAutoNewlineToggle}
                    />
                </SidebarItem>
            </div>
        </div>
    );
}

export default Sidebar;