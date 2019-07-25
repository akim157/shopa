import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import { HomePage, HomeRouters } from './pages/home';
import { ContactPage, ContactRouters } from './pages/contact';


export default (
    <Route component={ App } path={ App.path } >
        <IndexRoute component={ HomePage } />
        { HomeRouters }
        { ContactRouters }
    </Route>
);
