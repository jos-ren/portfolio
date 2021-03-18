import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home.js"
import Posts from "./pages/Posts.js"
import Header from "./comps/Header"

function App() {
  return (
    <Router>
      <div className="App">

        <Header />

        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/posts/:id">
              <Posts />
            </Route>

          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
