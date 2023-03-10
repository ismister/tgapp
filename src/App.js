import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./Components/header/Header";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg])

  return (
    <div className="App">
        <Header/>
        <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
