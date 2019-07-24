import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>App component1</h1>
            </div>
        );
    }
}

ReactDOM.render(
	<BrowserRouter>
	  <Switch>
        <Route path="/" component={ App }/>
        <Route path="/new2" component={ NewComponent }/>
    </Switch>
	</BrowserRouter>,
    document.getElementById('app')
);
