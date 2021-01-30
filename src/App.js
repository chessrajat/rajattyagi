import Home from "./Components/Pages/Home";
import "rsuite/dist/styles/rsuite-default.css";
import { Route, Switch } from "react-router-dom";
import Contact from "./Components/Pages/Contact";
import Resume from "./Components/Pages/Resume";
import Portfolio from "./Components/Pages/Portfolio";
import Blog from "./Components/Pages/Blog";
import BlogPage from "./Components/Pages/BlogPage";
import Page404 from "./Components/Pages/Page404";

function App() {
  return (
    <div className={"main_app"}>
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
        <Route path="/blog" exact>
          <Blog />
        </Route>
        <Route path="/blog/:blogname">
          <BlogPage />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
