import React, { Component } from 'react';

//Importing Images
import logo from './../../assets/images/logo.svg';

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">World Weather App</h1>
            </header>

        );
    }
}

export default Header;