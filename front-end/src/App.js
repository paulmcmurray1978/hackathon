import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: `url(${background})` }}>Hello World</div>
    </div>
  );
}

export default App;
