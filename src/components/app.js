import React, { Component } from 'react';
import Home from './home';
import Tips from './tips';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
        <Router>
            <div>


                <Route exact path="/" component={Home} />
                <Route path="/tips" component={Tips} />
            </div>
        </Router>
    );
  }
}

