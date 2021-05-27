import React from "react";
import CurrentCollectionContextProvider from "./contexts/CurrentCollectionContext"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPageLayout from "./components/layouts/MainPage/MainPageLayout"
import CollectionPageLayout from "./components/layouts/CollectionPage/CollectionPageLayout"

function App() {
  return (

    <CurrentCollectionContextProvider>
      <Router>
        <Switch>
          <div>
            <Route path="/" exact render={() => <MainPageLayout/>}/>
            <Route path="/:id" exact render={() => <CollectionPageLayout/>} />
          </div>
        </Switch>
      </Router>
    </CurrentCollectionContextProvider>
  
  );
}

export default App;
