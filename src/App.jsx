import './App.css';

function App() {
    return (
        <>
            <div className="header">
                <div className="left-container">
                    <a className="github-button" href="https://github.com/zstraight/latex-editor" target="_blank"></a>
                    <div className="page-buttons">
                        <button className="editor page-button">Latex Editor</button>
                        <button className="ocr page-button">Latex OCR</button>
                    </div>
                </div>
                <div className="right-container">
                    <button className="dark-toggle">darkmode</button>
                    <button className="profile-button"></button>
                </div>
            </div>

            <div className="main">
                <div className="sidebar">
                    <div className="tools-container">
                        <button className="help sidebar-button"></button>
                        <button className="symbols sidebar-button"></button>
                        <button className="formatting sidebar-button"></button>
                        <button className="cheatsheet sidebar-button"></button>
                    </div>
                    <div className="utilities-container">
                        <button className="export sidebar-button"></button>
                        <button className="files sidebar-button"></button>
                        <button className="settings sidebar-button"></button>
                    </div>
                </div>

                <div className="content-view">
                    <div className="latex-editor content-window"></div>
                    <div className="latex-render content-window"></div>
                </div>
            </div>
        </>
    );
}

export default App;