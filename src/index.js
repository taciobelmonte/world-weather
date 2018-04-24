import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './assets/css/index.css';
import App from './components/App';

ReactDOM.render(
    <BrowserRouter>
        <App title="World Weather App"/>
    </BrowserRouter>
    , document.getElementById('root')
)