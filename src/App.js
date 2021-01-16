import Home from "./Components/Pages/Home";
import "rsuite/dist/styles/rsuite-default.css";
import { Route, Switch } from "react-router-dom";
import Contact from "./Components/Pages/Contact";
import Resume from "./Components/Pages/Resume";
import Portfolio from "./Components/Pages/Portfolio";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
}

export default App;
