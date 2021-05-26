import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "../src/components/pages/HomePage/HomePage"
import MainPageLayout from "./components/layouts/mainPageLayout"

function App() {
  return (

    <Router>
      <Switch>
        <div>
          {/* <Route path="/" exact render={() => <HomePage/>}/> */}
          <Route path="/" exact render={() => <MainPageLayout/>}/>
        </div>
      </Switch>
    </Router>
  
  );
}

export default App;
