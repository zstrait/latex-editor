import LatexEditor from './LatexEditor.jsx';
import LatexRenderer from './LatexRenderer.jsx';
import 'katex/dist/katex.min.css';

function ContentView({ editorText, onTextChange, textToRender, isSyntaxHighlighting }) {
    return (
        <>
            <LatexEditor
                text={editorText}
                onChange={onTextChange}
                isSyntaxHighlighting={isSyntaxHighlighting}
            />
            <LatexRenderer textToRender={textToRender} />
        </>
    )
}

export default ContentView;