import { useState, useRef } from 'react';
import SidebarButton from './SidebarButton.jsx'
import SidePanel from './SidePanel.jsx';
import Settings from './Settings.jsx';
import useClickOutside from './useClickOutside.js';

function Sidebar({
    onCompileClick,
    isLiveRendering,
    onLiveRenderingToggle,
    isSyntaxHighlighting,
    onSyntaxHighlightingToggle
}) {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const settingsPanelRef = useRef(null);
    const settingsButtonRef = useRef(null);

    const toggleSettingsPanel = () => {
        setIsSettingsOpen(prevIsOpen => !prevIsOpen);
    };

    useClickOutside(settingsPanelRef, settingsButtonRef, isSettingsOpen, () => setIsSettingsOpen(false));

    return (
        <>
            <div className="sidebar">
                <div className="tools-container">
                    <SidebarButton icon="help" />
                    <SidebarButton icon="symbols" />
                    <SidebarButton icon="formatting" />
                    <SidebarButton icon="cheatsheet" />
                </div>
                {!isLiveRendering && (
                    <SidebarButton icon="compile" onClick={onCompileClick} />
                )}
                <div className="utilities-container">
                    <SidebarButton icon="export" />
                    <SidebarButton icon="files" />
                    <div style={{ position: 'relative' }}>
                        <div ref={settingsButtonRef}>
                            <SidebarButton
                                icon="settings"
                                onClick={toggleSettingsPanel}
                            />
                        </div>
                        <SidePanel
                            isOpen={isSettingsOpen}
                            panelRef={settingsPanelRef}
                        >
                            {isSettingsOpen && <Settings
                                isLiveRendering={isLiveRendering}
                                onLiveRenderingToggle={onLiveRenderingToggle}
                                isSyntaxHighlighting={isSyntaxHighlighting}
                                onSyntaxHighlightingToggle={onSyntaxHighlightingToggle}
                            />}
                        </SidePanel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;