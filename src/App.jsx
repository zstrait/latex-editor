import { useState, useEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ContentView from './components/MainContent/ContentView.jsx';
import './App.css';

const RENDER_DELAY_MS = 300;

function App() {
    const initialEditorText = "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}";

    const [editorText, setEditorText] = useState(initialEditorText);
    const [textToRender, setTextToRender] = useState("");
    const [isLiveRendering, setIsLiveRendering] = useState(true);
    const [isSyntaxHighlighting, setIsSyntaxHighlighting] = useState(true);
    const [isAutoNewline, setIsAutoNewline] = useState(false);

    const [fontSize, setFontSize] = useState(16);
    const [fontCommand, setFontCommand] = useState("");
    const [lineSpacing, setLineSpacing] = useState(1.0);
    const [alignment, setAlignment] = useState("center");
    const [currentStyle, setCurrentStyle] = useState("");

    const editorRef = useRef(null);

    const processLatexForRender = (text) => {
        const lines = text.split(/\\\\/g);

        if (fontCommand && fontCommand !== '') {
            let wrappedLines = lines.map(line => `\\${fontCommand}{${line}}`);
            return wrappedLines.join(`\\\\[${lineSpacing}em]`);
        }
        else if (currentStyle === 'italic') {
            let wrappedLines = lines.map(line => `\\mathit{${line}}`);
            return wrappedLines.join(`\\\\[${lineSpacing}em]`);
        }
        else if (currentStyle === 'bold') {
            let wrappedLines = lines.map(line => `\\mathbf{${line}}`);
            return wrappedLines.join(`\\\\[${lineSpacing}em]`);

        }

        return lines.join(`\\\\[${lineSpacing}em]`);
    };

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

    useEffect(() => {
        setTextToRender(processLatexForRender(editorText));
    }, [lineSpacing, fontCommand, alignment, currentStyle])

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


    // Format panel handlers
    const handleControllerInc = (controlling) => {
        if (controlling == 'font-size') {
            let newFontSize = fontSize + 2;
            setFontSize(newFontSize);
        }
        else if (controlling == 'line-spacing') {
            let newSpacing = lineSpacing + 0.25;
            setLineSpacing(newSpacing);
        }
    }

    const handleControllerDec = (controlling) => {
        if (controlling == 'font-size') {
            if (fontSize <= 2) {
                return;
            }
            let newFontSize = fontSize - 2;
            setFontSize(newFontSize);
        }
        else if (controlling == 'line-spacing') {
            if (lineSpacing <= 0.5) {
                return;
            }
            let newSpacing = lineSpacing - 0.25;
            setLineSpacing(newSpacing);
        }
    }

    const handleFontChange = (command) => {
        setFontCommand(command);
    };

    const handleStyleChange = (style) => {
        if (currentStyle === style) {
            setCurrentStyle('');
            return;
        }
        setCurrentStyle(style);
    }

    const handleAlignmentChange = (newAlignment) => {
        setAlignment(newAlignment);
    }

    const handleResetFormat = () => {
        setFontSize(16);
        setLineSpacing(1);
        setFontCommand("");
        setAlignment("center")
        setCurrentStyle("");
    }

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

                    font={fontCommand}
                    fontSize={fontSize}
                    handleFontChange={handleFontChange}
                    lineSpacing={lineSpacing}
                    handleControllerInc={handleControllerInc}
                    handleControllerDec={handleControllerDec}
                    alignment={alignment}
                    handleAlignmentChange={handleAlignmentChange}
                    currentStyle={currentStyle}
                    handleStyleChange={handleStyleChange}
                    handleResetFormat={handleResetFormat}
                />
                <ContentView
                    ref={editorRef}
                    editorText={editorText}
                    onChange={handleTextChange}
                    isSyntaxHighlighting={isSyntaxHighlighting}
                    textToRender={textToRender}
                    isAutoNewline={isAutoNewline}
                    fontSize={fontSize}
                    alignment={alignment}
                />
            </div>
        </>
    );
}

export default App;