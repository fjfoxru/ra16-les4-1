import logo from './logo.svg';
import Converter from './components/converter/Converter';
import { useState } from 'react';
import './App.css';

function App() {

  const [background, setBackground] = useState({
    backgroundHex: '', 
  });

  const onChangeColorValue = (e) => {
    setBackground(background => ({...background, backgroundHex: '#' + e}));
  }

  return (
    <div className="App" style={{'backgroundColor': background.backgroundRgb}}>
      <Converter onChangeColor={onChangeColorValue}/>
    </div>
  );
}

export default App;
