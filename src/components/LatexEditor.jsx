import { useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { stex } from '@codemirror/legacy-modes/mode/stex';
import { history } from '@codemirror/commands';
import { lineNumbers, highlightActiveLine, EditorView } from '@codemirror/view';
import { darkTheme } from '../themes/DarkTheme.js';

function LatexEditor({ editorText, onChange, isSyntaxHighlighting, isAutoNewline }) {
    const editorRef = useRef(null);

    const handleKeyDown = (event) => {
        if (isAutoNewline && event.key === 'Enter') {
            event.preventDefault();
            const view = editorRef.current?.view;

            if (view) {
                const currentPos = view.state.selection.main.head;
                const textToInsert = ' \\\\\n';

                view.dispatch({
                    changes: { from: currentPos, insert: textToInsert },
                    selection: { anchor: currentPos + textToInsert.length }
                });
            }
        }
    };

    const extensions = [
        EditorView.lineWrapping,
        lineNumbers(),
        highlightActiveLine(),
        history(),
    ];

    if (isSyntaxHighlighting) {
        extensions.push(StreamLanguage.define(stex));
    }

    return (
        <div onKeyDownCapture={handleKeyDown} className="latex-editor content-window">
            <CodeMirror
                ref={editorRef}
                value={editorText}
                height="100%"
                style={{ height: '100%', border: 'none' }}
                onChange={onChange}
                theme={darkTheme}
                extensions={extensions}
            />
        </div>
    );
}

export default LatexEditor;