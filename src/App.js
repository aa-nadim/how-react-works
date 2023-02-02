import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Tablet from './components/Tablet/Tablet';

function App() {
  return (
    <div className='App'>
      <Device name='uphone' price='13000' />
      <Tablet />
    </div>
  );
}

export default App;
