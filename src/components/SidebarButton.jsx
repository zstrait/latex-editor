function SidebarButton(props) {
    const buttonClasses = `sidebar-button ${props.icon || ''}`;

    return (
        <>
            <button className={buttonClasses} onClick={props.onClick}></button>
        </>
    )
}

export default SidebarButton;