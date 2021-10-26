import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
