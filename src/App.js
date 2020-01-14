import React, { useContext } from "react";
import Auth, { LoginComponent, SignupComponent } from "./components/Auth/Auth";
import UploadComponent from "./components/Upload/Upload";
import GalleryComponent from "./components/Gallery/Gallery";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./App.css";
import { Button } from "semantic-ui-react";
import { useLogout, SessionContext } from "./hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { state } = useContext(SessionContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.session ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const App = () => {
  return (
    <Auth>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginComponent />
            <Link to="/signup">Sign up</Link>
          </Route>
          <Route path="/signup">
            <SignupComponent />
            <Link to="/login">Login</Link>
          </Route>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/upload">
            <UploadComponent />
          </PrivateRoute>
          <PrivateRoute path="/galerry">
            <GalleryComponent />
          </PrivateRoute>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </Auth>
  );
};

const About = () => {
  return (
    <div className="App">
      <div>
        <nav>
          <Logout />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
        <div>About</div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="App">
      <div>
        <nav>
          <Logout />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
        <div>Home</div>
      </div>
    </div>
  );
};

const Logout = () => {
  const logout = useLogout();

  return <Button onClick={logout}>Logout</Button>;
};

export default App;
