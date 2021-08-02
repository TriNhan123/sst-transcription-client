import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewAudio from "./containers/NewAudio";
import Audio from "./containers/Audio";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>

        <Route exact path="/login">
            <Login />
        </Route>

        <Route exact path="/signup">
            <Signup />
        </Route>

        <Route exact path="/audio/new">
            <NewAudio />
        </Route>

        <Route exact path="/audio/:id">
            <Audio />
        </Route>

      {/* Finally, catch all unmatched routes */}
        <Route>
            <NotFound />
        </Route>

        
    </Switch>
  );
}