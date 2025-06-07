function SidePanel({ isOpen, panelRef, children }) { 
    if (!isOpen) {
        return null;
    }

    return (
        <div className="side-panel" ref={panelRef}>
            {children}
        </div>
    );
}

export default SidePanel;