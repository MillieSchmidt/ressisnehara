import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./views/Main.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  )
}

export default App;