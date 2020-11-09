import logo from "./logo.svg";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import NumbersAndWords from './components/NumbersAndWords';
import WordsAndColors from './components/WordsAndColors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Home path="/home"/>
        <NumbersAndWords path='/:item'/>
        <WordsAndColors path='/:word/:txtColor/:bgColor'/>
      </Router>
    </div>
  );
}

export default App;
