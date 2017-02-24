import React, { Component } from 'react';
import Header from './header';
import WeightForm from './weight-form';


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <WeightForm />
            </div>
        );
    }
}