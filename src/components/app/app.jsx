import Routes from "../routes";
import { BrowserRouter as Router } from "react-router-dom";
import QuickTravel from "../quickTravel/quickTravel";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
        <QuickTravel/>
      </Router>
    </div>
  );
}

export default App;
