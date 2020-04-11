import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import HomePage from "../views/HomePage";
import Login from "./auth/Login";
import RenderLoading from "./common/utils/RenderLoading";

//lazy-loading each and every component might be an anti-pattern and it is up to the developers to wisely choose
//withholding unnecessary code during initial download and lazy-loading them on demand, all without sacrificing user experience.
const NotFound = lazy(() => import("../views/NotFound"));
const DogPage = lazy(() => import("../views/DogPage"));
const MoviePage = lazy(() => import("../views/MoviePage"));
const TaskPage = lazy(() => import("../views/TaskPage"));
const Contact = lazy(() => import("../views/Contact"));

const Routes = () => {
  const { authApi } = useAuthContext();

  const AuthRoute = ({ component, ...options }) => {
    if (component === Login && authApi.state.isLoggedIn) {
      return <Redirect to='/react-bootstrap-app' />;
    } else {
      const finalComponent = authApi.state.isLoggedIn ? component : Login;

      return <Route {...options} component={finalComponent} />;
    }
  };

  return (
    <Suspense fallback={<RenderLoading />}>
      <Switch>
        <Route exact path='/react-bootstrap-app' component={HomePage} />
        <Route path='/react-bootstrap-app' component={HomePage} />
        <AuthRoute path='/login' component={Login} />
        <Route path='/dogs' component={DogPage} />
        <Route path='/movies' component={MoviePage} />
        <AuthRoute path='/tasks' component={TaskPage} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
