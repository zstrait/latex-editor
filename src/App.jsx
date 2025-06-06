import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentView from './components/ContentView.jsx';
import './App.css';

const RENDER_DELAY_MS = 500;

function App() {
    const initialEditorText = "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}";
    const [editorText, setEditorText] = useState(initialEditorText);
    const [textToRender, setTextToRender] = useState(initialEditorText);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setTextToRender(editorText);
        }, RENDER_DELAY_MS);

        return () => {
            clearTimeout(timerId);
        };
    }, [editorText]);

    const handleEditorTextChange = (newText) => {
        setEditorText(newText);
    };

    const handleCompileClick = () => {
        setTextToRender(editorText);
    };

    return (
        <>
            <Header></Header>
            <div className="main">
                <Sidebar onCompileRequest={handleCompileClick} />
                <ContentView
                    currentEditorText={editorText}
                    onTextChange={handleEditorTextChange}
                    compiledText={textToRender}
                />
            </div>
        </>
    );
}

export default App;