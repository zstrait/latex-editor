import { forwardRef } from 'react';
import LatexEditor from './LatexEditor.jsx';
import LatexRenderer from './LatexRenderer.jsx';

const ContentView = forwardRef(({ editorText, onChange, isSyntaxHighlighting, textToRender, isAutoNewline, fontSize }, ref) => {
    return (
        <>
            <LatexEditor
                ref={ref}
                editorText={editorText}
                onChange={onChange}
                isSyntaxHighlighting={isSyntaxHighlighting}
                isAutoNewline={isAutoNewline}
            />
            <LatexRenderer textToRender={textToRender} fontSize={fontSize} />
        </>
    )
});

export default ContentView;