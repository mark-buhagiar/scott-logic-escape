import Routes from "../routes";
import { BrowserRouter as Router } from "react-router-dom";
import QuickTravel from "../quickTravel/quickTravel";
import './app.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
        <QuickTravel/>
        <div className="spacer"></div>
      </Router>
    </div>
  );
}

export default App;
