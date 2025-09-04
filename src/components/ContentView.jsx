import LatexEditor from './LatexEditor.jsx';
import LatexRenderer from './LatexRenderer.jsx';
import 'katex/dist/katex.min.css';

function ContentView({ editorText, onChange, isSyntaxHighlighting, textToRender, isAutoNewline }) {
    return (
        <>
            <LatexEditor
                editorText={editorText}
                onChange={onChange}
                isSyntaxHighlighting={isSyntaxHighlighting}
                isAutoNewline={isAutoNewline}
            />
            <LatexRenderer textToRender={textToRender} />
        </>
    )
}

export default ContentView;