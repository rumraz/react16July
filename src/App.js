import logo from './logo.svg';
import './App.css';
import Landing from './components/landing';
import Carousel from './components/carousel';
import Item from './components/item';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/signup';
import Product from './components/productDetails';
import Cards from './components/cards';
import Home from './components/home';
import { useState } from 'react';

function App() {
  var [isuserloogedin, setUserLogin] = useState(localStorage.token ? true : false);
  function loggedin() {
    setUserLogin(true)
  }

  return (
    <div className="App">
      <Router>
        <Landing isuserloogedin={isuserloogedin} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cards' component={Cards} />
          <Route exact path='/login' ><Login loggedin={loggedin} /></Route>
          <Route exact path='/productDetails' component={Product} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
