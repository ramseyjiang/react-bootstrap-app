import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import TaskPage from "../views/TaskPage";
import Contact from "../views/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/tasks' component={TaskPage} />
      <Route path='/contact' component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
