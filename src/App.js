import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        RRR
      </header>
        <button>Close the door, open the window</button>
    </div>
  );
}

export default App;