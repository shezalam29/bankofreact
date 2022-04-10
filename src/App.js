import logo from './logo.svg';
import logo2 from './logo2.png'
import './App.css';
import Clock from './components/Clock';
import Credits from './components/Credits';

function App() {

  return (
    <div>
      <img src={logo2} alt = 'banklogo' class ='center' />
      <Clock/>
      <Credits/>
   </div>
  );
}

export default App;
