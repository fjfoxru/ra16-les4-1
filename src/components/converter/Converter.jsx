import { useState } from 'react';

function Converter(props) {

    const [colorValue, setColorValue] = useState({
        colorHex: '',
        colorRgb: '', 
    });
    
    const [error, setError] = useState(false);

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

    const onValueChange = (e) => {
        setError(false);
        setColorValue(colorValue => ({...colorValue, colorHex: e.target.value}));
        
        if (e.target.value.length === 7) {
            if (e.target.value[0] === '#' && e.target.value.match(/[^A-Za-z0-9]/)) {
                const rgb = hexToRgb(e.target.value)
                setColorValue(colorValue => ({...colorValue, colorRgb: rgb}));
                props.onChangeColor(colorValue.colorHex);
            } else {
                setError(true);
            }
        }
    }
    return (
        <>
        <input id="name" name="name" value={colorValue.colorHex} onChange={onValueChange} />
        {error && 'Ошибка'}
        {colorValue.colorRgb && !error && <div>RGB ({colorValue.colorRgb.r}, {colorValue.colorRgb.g}, {colorValue.colorRgb.b} )</div>}
        </>
    );
}
export default Converter;