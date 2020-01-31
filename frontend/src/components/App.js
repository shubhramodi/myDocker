import React from 'react';
import '../styles/App.css';
import Persons from './../containers/Persons';
import Aux from '../hoc/Aux';
import WithClass from '../hoc/WithClass';

function App() {
    return (
        <Aux>
            <Persons/>
        </Aux>
    );
}

export default WithClass(App, "App");
