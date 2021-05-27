import React from "react";
import CurrentCollectionContextProvider from "./contexts/CurrentCollectionContext"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPageLayout from "./components/layouts/MainPage/MainPageLayout"
//import CoverPage from "./components/common/CoverPage/CoverPage"
import CollectionPage from "./components/layouts/CollectionPage/CollectionPage"

function App() {
  return (

    <CurrentCollectionContextProvider>
      <Router>
        <Switch>
          <div>
            {/* <Route path="/" exact render={() => <HomePage/>}/> */}
            <Route path="/" exact render={() => <MainPageLayout/>}/>
            {/* <Route path="/:id" exact render={() => <CoverPage/>} /> */}
            <Route path="/:id" exact render={() => <CollectionPage/>} />
          </div>
        </Switch>
      </Router>
    </CurrentCollectionContextProvider>
  
  );
}

export default App;
