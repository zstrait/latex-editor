import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { stex } from '@codemirror/legacy-modes/mode/stex';
import { defaultKeymap } from '@codemirror/commands';
import { keymap } from '@codemirror/view';
import { darkTheme } from '../themes/DarkTheme.js';

function LatexEditor({ editorText, onChange, isSyntaxHighlighting }) {
    const extensions = [
        keymap.of(defaultKeymap),
    ];

    if (isSyntaxHighlighting) {
        extensions.push(StreamLanguage.define(stex));
    }

    return (
        <>
            <div className="latex-editor content-window">
                <CodeMirror
                    value={editorText}
                    height="100%"
                    style={{ height: '100%', border: 'none' }}
                    onChange={onChange}
                    theme={darkTheme}
                    extensions={extensions}
                    basicSetup={{
                        lineNumbers: true,
                        highlightActiveLine: true,
                        foldGutter: false,
                        dropCursor: true,
                        allowMultipleSelections: true,
                        indentOnInput: true,
                        history: true,
                        drawSelection: true
                    }}
                />
            </div>
        </>
    )
}

export default LatexEditor;