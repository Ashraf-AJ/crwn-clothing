import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
