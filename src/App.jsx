import { useState, useEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ContentView from './components/MainContent/ContentView.jsx';
import './App.css';

const RENDER_DELAY_MS = 300;

const processLatexForRender = (text) => {
    return text.replace(/\\\\/g, '\\\\[1em]');
};

function App() {
    const initialEditorText = "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}";
    const [editorText, setEditorText] = useState(initialEditorText);
    const [textToRender, setTextToRender] = useState(processLatexForRender(initialEditorText));
    const [isLiveRendering, setIsLiveRendering] = useState(true);
    const [isSyntaxHighlighting, setIsSyntaxHighlighting] = useState(true);
    const [isAutoNewline, setIsAutoNewline] = useState(false);

    const editorRef = useRef(null);

    useEffect(() => {
        if (isLiveRendering) {
            const timerId = setTimeout(() => {
                setTextToRender(processLatexForRender(editorText));
            }, RENDER_DELAY_MS);

            return () => {
                clearTimeout(timerId);
            };
        }
    }, [editorText, isLiveRendering]);

    const handleTextChange = (newText) => {
        setEditorText(newText);
    };

    const handleInsertText = (textToInsert) => {
        if (editorRef.current) {
            editorRef.current.insertText(textToInsert);
        }
    };

    const handleCompileClick = () => {
        setTextToRender(processLatexForRender(editorText));
    };

    // Export Panel Handlers
    const handleExportTxt = () => {
        const blob = new Blob([editorText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'LaTeX.txt';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

    // Settings panel handlers
    const handleLiveRenderingToggle = (checked) => {
        setIsLiveRendering(checked);
    };

    const handleAutoNewlineToggle = (checked) => {
        setIsAutoNewline(checked);
    };

    const handleSyntaxHighlightingToggle = (checked) => {
        setIsSyntaxHighlighting(checked);
    };

    return (
        <>
            <Header></Header>
            <div className="main">
                <Sidebar
                    onCompileClick={handleCompileClick}
                    isLiveRendering={isLiveRendering}
                    onLiveRenderingToggle={handleLiveRenderingToggle}
                    isSyntaxHighlighting={isSyntaxHighlighting}
                    onSyntaxHighlightingToggle={handleSyntaxHighlightingToggle}
                    isAutoNewline={isAutoNewline}
                    onAutoNewlineToggle={handleAutoNewlineToggle}
                    onExportTxt={handleExportTxt}
                    onInsertText={handleInsertText}
                />
                <ContentView
                    ref={editorRef}
                    editorText={editorText}
                    onChange={handleTextChange}
                    isSyntaxHighlighting={isSyntaxHighlighting}
                    textToRender={textToRender}
                    isAutoNewline={isAutoNewline}
                />
            </div>
        </>
    );
}

export default App;