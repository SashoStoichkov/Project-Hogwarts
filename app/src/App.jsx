import React from 'react'

import Textfield from './Components/Textfield.jsx'
import LoginRegister from './Pages/LoginRegister.jsx'

import Index from './Pages/Index.jsx'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/index' exact component={Index} />
                    <Route path='/' exact component={LoginRegister} />
                </Switch>
            </Router>
        );
    }
}

