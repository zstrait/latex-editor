function SidePanel({ panelRef, style, children }) {
    return (
        <div className="side-panel" ref={panelRef} style={style}>
            {children}
        </div>
    );
}

export default SidePanel;