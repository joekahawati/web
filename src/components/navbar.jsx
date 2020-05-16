import React, { Component } from 'react';
import MovieSearch from './movieSearch';
import Calculation from './calculation';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Navbar extends Component {
    render() { 
        return ( 
            <Router>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <a className="navbar-brand">CME Offshore</a>
        
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/movieSearch">Movies</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/calculation">Counter</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/movieSearch">
                        <MovieSearch />
                    </Route>
                    <Route path="/calculation">
                        <Calculation />
                    </Route>

                </Switch>
            </Router>
         );
    }
}
 
export default Navbar;