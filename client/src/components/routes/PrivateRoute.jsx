import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../dashboard/common/Header';
// import Nav from "../dashboard/common/Nav";
// import QuickActions from "../dashboard/common/QuickActions";

const isAuthenticated = true;
const loading = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && loading ? (
        <Redirect to="login" />
      ) : (
        <Fragment>
          <Header />
          {/*<Nav />*/}
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {/*<QuickActions />*/}
            <Component {...props} />
          </main>
        </Fragment>
      )
    }
  />
);

export default PrivateRoute;
