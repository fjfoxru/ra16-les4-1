import logo from './logo.svg';
import Converter from './components/converter/Converter';
import { useState } from 'react';
import './App.css';

function App() {

  const [background, setBackground] = useState('#ffffff');

  const onChangeColorValue = (color) => {
    setBackground(color);
  }

  return (
    <div className="App" style={{'backgroundColor': background}}>
      <Converter onChangeColor={onChangeColorValue}/>
    </div>
  );
}

export default App;
