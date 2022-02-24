import React, { Fragment, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import Header from '../dashboard/common/Header';
import Nav from '../dashboard/common/Nav';
import login from '../auth/Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authState] = useContext(AuthContext);
  const { isAuthenticated, loading } = authState;
  return (
    <Route
      {...rest}
      render={() =>
        !isAuthenticated && loading ? (
          <Redirect to="login" />
        ) : (
          <Fragment>
            <Header />
            <Nav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Component {...rest} />
            </main>
          </Fragment>
        )
      }
    />
  );
};

export default PrivateRoute;
