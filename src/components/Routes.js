import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import TaskPage from "../views/TaskPage";
import Contact from "../views/Contact";

const Routes = () => {
  const { user } = useContext(AuthContext);

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      {user && <Route path='/tasks' component={TaskPage} />}
      <Route path='/contact' component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
