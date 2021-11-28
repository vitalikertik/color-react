import logo from './logo.svg';
import './App.css';
//import {Welcom } from './component/welcom component/welcom';
//import Goodbye from './component/goodbye/goodbye';
import ColoredText from './component/coloredText/coloredtext';

 function formatName(firstName, lastName){
   return` ${firstName} ${lastName}`;
 }

function App() {
  
  return (
    <div className="App">
<ColoredText />

    {/* 
     <Welcom name={myName} age="18"/>
     <Goodbye name={myName} formatName={formatName}/> */}
    </div>
  );
}

export default App;
