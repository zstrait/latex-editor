import { createTheme } from 'thememirror';
import { tags as t } from '@lezer/highlight';

const darkTheme = createTheme({
    variant: 'dark',
    settings: {
        background: '#1E1E1E',
        foreground: '#ABB2BF',
        caret: '#528BFF',
        selection: '#264F78',
        selectionMatch: '#264F78',
        searchHighlight: '#5A5A5A',

        lineHighlight: '#222222',
        gutterBackground: '#1E1E1E',
        gutterForeground: '#636D83',
    },
    styles: [
        {
            tag: t.comment,
            color: '#5C6370',
        },
        {
            tag: t.variableName,
            color: '#E06C75',
        },
        {
            tag: [t.string, t.special(t.brace)],
            color: '#98C379',
        },
        {
            tag: t.number,
            color: '#D19A66',
        },
        {
            tag: t.bool,
            color: '#56B6C2',
        },
        {
            tag: t.null,
            color: '#56B6C2',
        },
        {
            tag: t.keyword,
            color: '#C678DD',
        },
        {
            tag: t.operator,
            color: '#56B6C2',
        },
        {
            tag: t.className,
            color: '#E5C07B',
        },
        {
            tag: t.definition(t.typeName),
            color: '#E5C07B',
        },
        {
            tag: t.typeName,
            color: '#E5C07B',
        },
        {
            tag: t.angleBracket,
            color: '#E06C75',
        },
        {
            tag: t.tagName,
            color: '#E06C75',
        },
        {
            tag: t.attributeName,
            color: '#D19A66',
        },
    ],
});

export { darkTheme };