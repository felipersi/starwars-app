import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SwapiProvider from './context/Swapi';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <SwapiProvider>
                <Route path="/" exact={true} component={App} />
            </SwapiProvider>
        </Switch>
    </ BrowserRouter>
, document.getElementById('root'));
