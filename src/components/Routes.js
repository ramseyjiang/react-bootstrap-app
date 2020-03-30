import React, { useContext, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Home from "../views/Home";
import MoviePage from "../views/MoviePage";

//lazy-loading each and every component might be an anti-pattern and it is up to the developers to wisely choose
//withholding unnecessary code during initial download and lazy-loading them on demand, all without sacrificing user experience.
const NotFound = lazy(() => import("../views/NotFound"));
const TaskPage = lazy(() => import("../views/TaskPage"));
const Contact = lazy(() => import("../views/Contact"));

const Routes = () => {
  const { user } = useContext(AuthContext);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/movies' component={MoviePage} />
        {user && <Route path='/tasks' component={TaskPage} />}
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
