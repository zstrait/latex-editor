import { useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentView from './components/ContentView.jsx';
import './App.css';

function App() {
    const [editorText, setEditorText] = useState(
        "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
    );

    const [textToRender, setTextToRender] = useState("");

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