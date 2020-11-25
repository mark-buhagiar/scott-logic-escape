import React from "react";
import { Switch, Route} from "react-router-dom";
import Room from "./room/room";
import Start from "./start/start";

const Routes = () => (
  <Switch>
    <Route path="/room/:roomId" component={Room} />
    <Route path="/" component={Start} />
    <Route path="*" render={() => <div>404</div>} />
  </Switch>
);

export default Routes;
