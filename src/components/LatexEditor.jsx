import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { stex } from '@codemirror/legacy-modes/mode/stex';
import { defaultKeymap } from '@codemirror/commands';
import { keymap } from '@codemirror/view';
import { darkTheme } from '../themes/DarkTheme.js';

function LatexEditor({ text, onChange }) {
    return (
        <>
            <div className="latex-editor content-window">
                <CodeMirror
                    value={text}
                    height="100%"
                    style={{ height: '100%', border: 'none' }}
                    onChange={onChange}
                    theme={darkTheme}
                    extensions={[
                        StreamLanguage.define(stex),
                        keymap.of(defaultKeymap),
                    ]}
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