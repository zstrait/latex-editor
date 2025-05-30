import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { stex } from '@codemirror/legacy-modes/mode/stex';
import { darkTheme } from '../themes/DarkTheme.js';

function LatexEditor({text, onChange}) {
    return (
        <>
            <div className="latex-editor content-window">
                <CodeMirror
                    value={text}
                    height="100%"
                    style={{ height: '100%', border: 'none' }}
                    onChange={onChange}
                    theme={darkTheme}
                    extensions={[StreamLanguage.define(stex)]}
                />
            </div>
        </>
    )
}

export default LatexEditor;