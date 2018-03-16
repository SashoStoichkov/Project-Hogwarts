import React from 'react'

import Textfield from './Components/Textfield.jsx'
import LoginRegister from './Pages/LoginRegister.jsx'

import Index from './Pages/Index.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'

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
                    <Route path='/' exact component={Index} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/loginregister' exact component={LoginRegister} />
                </Switch>
            </Router>
        );
    }
}

