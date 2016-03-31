import React from 'react';
import {Component} from 'react';
import Navigator from './navigator';
import MainPage from './main-page';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navigator />
                <MainPage />
            </div>
        );
    }
}
