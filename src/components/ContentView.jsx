import LatexEditor from './LatexEditor.jsx';
import LatexRenderer from './LatexRenderer.jsx';
import 'katex/dist/katex.min.css';

function ContentView({ currentEditorText, onTextChange, compiledText }) {
    return (
        <>
            <LatexEditor
                text={currentEditorText}
                onChange={onTextChange}
            />
            <LatexRenderer textToRender={compiledText} />
        </>
    )

}

export default ContentView;