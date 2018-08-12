import React, { Component } from 'react';
import App from './App';
import Login from './pages/Login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/nomatch';
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

export default class IRouter extends Component{
    render(){
        return (
            <Router>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={() => (
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons} />
                            <Route component={NoMatch} />
                        </Admin>
                    )}  />
                    <Route path='/order/detail' component={Login} />
                </App>
            </Router>
        )
    }
}