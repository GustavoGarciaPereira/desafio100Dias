import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Releases from './container/Releases';
import Sprints from './container/Sprints';
import Backlog from './container/Backlog';
import Home from './container/Home';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path = '/' component={App}>
            <IndexRoute component={Home} />
            <Route path = '/Releases' component={Releases}/>
            <Route path = '/Sprints' component={Sprints}/>
            <Route path = '/Backlog' component={Backlog}/>
        </Route>        
    </Router>
    , 
    document.getElementById('root'));
registerServiceWorker();
