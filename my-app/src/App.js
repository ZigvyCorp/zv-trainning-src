import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';

//Page
import Home from './pages/home';
import Details from './pages/details';
import NavBar from './components/Header/NavBar';

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar ></NavBar>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route exact path="/stradium/:id" component={Details} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;


