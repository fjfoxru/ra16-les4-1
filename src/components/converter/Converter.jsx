import { useState } from 'react';

function Converter(props) {

    const [colorValue, setColorValue] = useState({
        colorHex: '',
        colorRgb: '', 
    });


    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

    const onValueChange = (e) => {
        setColorValue(colorValue => ({...colorValue, colorHex: e.target.value}));
        const rgb = hexToRgb(e.target.value)
        setColorValue(colorValue => ({...colorValue, colorRgb: rgb}));
        props.onChangeColor(colorValue.colorHex);
    }


    return (
        <>
        <input id="name" name="name" value={colorValue.colorHex} onChange={onValueChange} />
        {colorValue.colorRgb && <div>RGB ({colorValue.colorRgb.r}, {colorValue.colorRgb.g}, {colorValue.colorRgb.b} )</div>}
        </>


    );
}


export default Converter;