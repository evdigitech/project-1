import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserLayout from "../../layout/userLayouts/userLayout";
const Login = React.lazy(() => import("./login"));
const Password = React.lazy(() => import("./password"));
const SignUp = React.lazy(() => import("./signUp"));
const Passcode = React.lazy(() => import("./passcodeSent"));
const Profile = React.lazy(() => import("./profile/profile"));
const Programs = React.lazy(() => import("./programs/programs"));
const Homepage = React.lazy(() => import("./homePage/homepage"));
const MailPage = React.lazy(() => import("./homePage/mail/mail"));
const ChangePassword = React.lazy(() => import("./changePassword"));



const User = ({ match }) => {
  return (
    <UserLayout>
      <Suspense fallback={<div className="loading" />}>
        <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
          <Route
            path={`${match.url}/login`}
            render={(props) => <Login {...props} />}
          />
          <Route
            path={`${match.url}/password`}
            render={(props) => <Password {...props} />}
          />
          <Route
            path={`${match.url}/signUp`}
            render={(props) => <SignUp {...props} />}
          />
          <Route
            path={`${match.url}/passcode`}
            render={(props) => <Passcode {...props} />}
          />
          <Route
            path={`${match.url}/profile`}
            render={(props) => <Profile {...props} />}
          />
          <Route
            path={`${match.url}/programs`}
            render={(props) => <Programs {...props} />}
          />
          <Route
            path={`${match.url}/homePage`}
            render={(props) => <Homepage {...props} />}
          />
          <Route
            path={`${match.url}/mailPage`}
            render={(props) => <MailPage {...props} />}
          />
          <Route
            path={`${match.url}/ChangePassword`}
            render={(props) => <ChangePassword {...props} />}
          />
          
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </UserLayout>
  );
};

export default User;
