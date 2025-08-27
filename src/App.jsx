import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentView from './components/ContentView.jsx';
import './App.css';

const RENDER_DELAY_MS = 300;

//
const processLatexForRender = (text) => {
    return text.replace('\\\\', '\\\\[1em]');
};

function App() {
    const initialEditorText = "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}";
    const [editorText, setEditorText] = useState(initialEditorText);
    const [textToRender, setTextToRender] = useState(processLatexForRender(initialEditorText));
    const [isLiveRendering, setIsLiveRendering] = useState(true);
    const [isSyntaxHighlighting, setIsSyntaxHighlighting] = useState(true);

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

    const handleCompileClick = () => {
        setTextToRender(processLatexForRender(editorText));
    };

    const handleLiveRenderingToggle = (checked) => {
        setIsLiveRendering(checked);
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
                />
                <ContentView
                    editorText={editorText}
                    onChange={handleTextChange}
                    isSyntaxHighlighting={isSyntaxHighlighting}
                    textToRender={textToRender}
                />
            </div>
        </>
    );
}

export default App;