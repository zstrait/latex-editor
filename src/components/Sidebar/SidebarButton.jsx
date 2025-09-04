function SidebarButton({icon, onClick}) {
    const buttonClasses = `sidebar-button ${icon || ''}`;

    return (
        <>
            <button className={buttonClasses} onClick={onClick}></button>
        </>
    )
}

export default SidebarButton;