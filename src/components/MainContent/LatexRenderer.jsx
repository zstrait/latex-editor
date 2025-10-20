import { useEffect, useRef } from 'react';
import katex from 'katex';

function LatexRenderer({ textToRender }) {
    const outputDivRef = useRef(null);

    useEffect(() => {
        const currentDiv = outputDivRef.current;
        if (currentDiv) {
            if (textToRender && textToRender.trim() !== "") {
                try {
                    katex.render(textToRender, currentDiv, {
                        throwOnError: false,
                        displayMode: true,
                    });
                } catch (error) {
                    console.error("KaTeX rendering error:", error);
                    currentDiv.textContent = `KaTeX Error: ${error.message}`;
                }
            } else {
                currentDiv.innerHTML = "";
            }
        }
    }, [textToRender]);

    return (
        <>
            <div
                className="latex-render content-window"
                ref={outputDivRef}
                style={{
                    padding: '20px',
                    overflowY: 'auto',
                    color: '#ABB2BF',
                    backgroundColor: '#1E1E1E'
                }}
            >
            </div>
        </>
    )
}

export default LatexRenderer;