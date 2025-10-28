
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import 'katex/dist/katex.min.css';

function FormatFontMenu({ font, handleFontChange }) {
    const options = [
        { value: '', label: 'Default' },
        { value: 'mathrm', label: 'Serif' },
        { value: 'mathsf', label: 'Sans-Serif' },
        { value: 'mathtt', label: 'Monospace' },
        { value: 'mathfrak', label: 'Gothic' }
    ];

    const currentValue = options.find(option => option.value === font);

    const handleSelect = (option) => {
        handleFontChange(option.value);
    };

    return (
        <>
            <Dropdown options={options} value={currentValue} onChange={handleSelect} className="fonts-dropdown" />
        </>
    )
}

export default FormatFontMenu;