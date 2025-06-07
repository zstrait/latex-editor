import { useState } from 'react';
import { Within } from "@theme-toggles/react";
import "@theme-toggles/react/css/Within.css";

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const handleToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <>
            <div className="header">
                <div className="left-container">
                    <a className="github-button" href="https://github.com/zstraight/latex-editor" target="_blank"></a>
                    <div className="page-buttons">
                        <button className="editor page-button">LaTeX Editor</button>
                        <button className="ocr page-button">LaTeX OCR</button>
                    </div>
                </div>
                <div className="right-container">
                    <Within duration={750} reversed toggled={isDarkMode} onToggle={handleToggle} className="darkmode-toggle" />
                    <button className="profile-button"></button>
                </div>
            </div>
        </>
    )
}

export default Header;