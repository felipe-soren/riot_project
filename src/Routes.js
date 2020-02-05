import React from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import Main from "./pages/Main"
import SummonerInfo from "./pages/SummonerInfo"


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/app" component={Main} />
      <Route path="/summoner/:name" component={SummonerInfo} />
      <Route exact path="/" component= {() => (<Redirect to={{ pathname: "/app" }} />) }/>
      <Route path="*" component={() => <h1>Page not found</h1>} />
      <Route exact path="/event/:name" component={SummonerInfo} />
    </Switch>
  </BrowserRouter>
);

export default Routes