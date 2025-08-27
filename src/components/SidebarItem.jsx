import { useState, useRef, useLayoutEffect } from 'react';
import SidebarButton from './SidebarButton.jsx';
import SidePanel from './SidePanel.jsx';
import useClickOutside from './useClickOutside.js';

function SidebarItem({ name, icon, activePanel, onToggle, children }) {
    const isOpen = activePanel === name;
    const [panelStyle, setPanelStyle] = useState({ opacity: 0, pointerEvents: 'none' });

    const panelRef = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        if (isOpen && containerRef.current && panelRef.current) {

            const buttonRect = containerRef.current.getBoundingClientRect();
            const panelRect = panelRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const PADDING = 20;

            let relativeTop = (buttonRect.height / 2) - (panelRect.height / 2);

            const panelAbsoluteTop = buttonRect.top + relativeTop;
            const panelAbsoluteBottom = panelAbsoluteTop + panelRect.height;

            if (panelAbsoluteBottom > viewportHeight - PADDING) {
                const newAbsoluteTop = viewportHeight - panelRect.height - PADDING;
                relativeTop = newAbsoluteTop - buttonRect.top;
            } else if (panelAbsoluteTop < PADDING) {
                const newAbsoluteTop = PADDING;
                relativeTop = newAbsoluteTop - buttonRect.top;
            }

            const triangleTop = (buttonRect.height / 2) - relativeTop;

            setPanelStyle({
                top: `${relativeTop}px`,
                '--triangle-top': `${triangleTop}px`,
                opacity: 1,
                pointerEvents: 'auto',
            });
        } else {
            setPanelStyle({ opacity: 0, pointerEvents: 'none' });
        }
    }, [isOpen]);

    useClickOutside(panelRef, containerRef, isOpen, () => onToggle(null));

    return (
        <div style={{ position: 'relative' }} ref={containerRef}>
            <SidebarButton icon={icon} onClick={() => onToggle(name)} />
            {isOpen && (
                <SidePanel panelRef={panelRef} style={panelStyle}>
                    {children}
                </SidePanel>
            )}
        </div>
    );
}

export default SidebarItem;