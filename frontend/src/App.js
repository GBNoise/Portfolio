import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/MainPage";
import { NavBar } from "./components/NavBar";
import ProjectsPage from "./components/ProjectsPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
