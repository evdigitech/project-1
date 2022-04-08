import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


const Dashboard = React.lazy(() =>
  import('./dashboard/dashboard')
);

const DashboardProduct = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard-list`} />
      <Route
        path={`${match.url}/dashboard-list`}
        render={props => <Dashboard {...props} />}
      />          
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default DashboardProduct;
