import logo from './logo.svg';
import logo2 from './logo2.png'
import './App.css';
import Clock from './components/Clock';
import Credits from './components/Credits';
import Debits from './components/Debits';
import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState(<Credits/>);
  
  return (
    <div>
      <img src={logo2} alt = 'banklogo' class ='center' />
      <Clock/>
      <div class = 'flex-parent jc-center'>
        <button> Login/Customize </button>
        <button onClick = {() => setState(<Credits/>)}> Credits </button> 
        <button onClick = {() => setState(<Debits/>)}> Debits </button> 
      </div>
      {state}
   </div>
  );
}

export default App;
