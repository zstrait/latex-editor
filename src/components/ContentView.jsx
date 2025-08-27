import LatexEditor from './LatexEditor.jsx';
import LatexRenderer from './LatexRenderer.jsx';
import 'katex/dist/katex.min.css';

function ContentView({ editorText, onChange, isSyntaxHighlighting, textToRender }) {
    return (
        <>
            <LatexEditor
                editorText={editorText}
                onChange={onChange}
                isSyntaxHighlighting={isSyntaxHighlighting}
            />
            <LatexRenderer textToRender={textToRender} />
        </>
    )
}

export default ContentView;