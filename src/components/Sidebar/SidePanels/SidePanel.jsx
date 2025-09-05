function SidePanel({ panelRef, style, children, className }) {
    return (
        <div className={`side-panel ${className || ''}`} ref={panelRef} style={style}>
            {children}
        </div>
    );
}

export default SidePanel;