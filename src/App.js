import logo2 from './logo2.png'
import './App.css';
import Clock from './components/Clock';
import Form from './components/Form';

const App = () => {
  return (
    <div>
      <img src={logo2} class ='center' />
      <Clock/>
      <Form/>
    </div>
  );
}


export default App;
