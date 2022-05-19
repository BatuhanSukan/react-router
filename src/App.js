import './App.css';
import React from "react";
import {
  BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Error404 from "./components/Error404.js";
 
  function App() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink activeStyle={{ backgroundColor: 'blue', color: '#fff' }} to="/" exact >Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ backgroundColor: 'blue', color: '#fff' }} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ backgroundColor: 'blue', color: '#fff' }} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
  
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} /> 
          <Route path="*" component={Error404} /> 
        </Routes>
      </div>
    </Router>
    );
  }

  


export default App;
