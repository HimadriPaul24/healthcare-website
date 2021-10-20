import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, Switch,
  Route
}
  from "react-router-dom";
import Home from './components/Home/Home';
import Testimonial from './components/Testimonial/Testimonial';
import About from './components/About/About';


import Services from './components/Services/Services';
import Footer from "./components/Footer/Footer";
import Login from './components/Login/Login';
import Signup from './components/SignUp/SignUp';
// import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import Details from "./components/Details/Details";

import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header>

          </Header>
          <Switch>
            <Route exact path="/">
              <Home>

              </Home>
            </Route>

            <Route path="/home">
              <Home>

              </Home>
            </Route>
            <PrivateRoute path="/care">
              <Testimonial>

              </Testimonial>
            </PrivateRoute>

            <PrivateRoute path="/about">
              <About>

              </About>

            </PrivateRoute>

            <Route path="/services/:id">
              <Details></Details>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>

          {/* <PrivateRoute></PrivateRoute> */}

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
