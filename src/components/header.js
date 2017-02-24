import React, { Component } from 'react';
import Tips from './tips';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="row">
                        <div className="navbar-header col-md-offset-4 col-md-4">
                            <h2>Weight Loss Goal Calculator</h2>
                        </div>
                        <div>
                                <span className="navbar-right navbar-text navbar-text-right">
                                    <Link to="/tips">Tips to Lose Weight</Link>
                                </span>
                                <span className="navbar-right navbar-text navbar-text-right">
                                    <Link to="/">Home</Link>
                                </span>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}