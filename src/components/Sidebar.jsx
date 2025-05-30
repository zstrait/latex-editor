import SidebarButton from './SidebarButton.jsx'

function Sidebar({ onCompileRequest }) {
    return (
        <>
            <div className="sidebar">
                <div className="tools-container">
                    <SidebarButton icon="help" />
                    <SidebarButton icon="symbols" />
                    <SidebarButton icon="formatting" />
                    <SidebarButton icon="cheatsheet" />
                </div>
                <SidebarButton icon="compile" onClick={onCompileRequest} />
                <div className="utilities-container">
                    <SidebarButton icon="export" />
                    <SidebarButton icon="files" />
                    <SidebarButton icon="settings" />
                </div>
            </div>
        </>
    )
}

export default Sidebar;