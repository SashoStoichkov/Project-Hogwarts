import React from 'react'

import Textfield from './Components/Textfield.jsx'
import LoginRegister from './Pages/LoginRegister.jsx'
import Descript from './Pages/Description.jsx'

import Index from './Pages/Index.jsx'
import Test from './Pages/Test.jsx'

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
                    <Route path='/code' exact component={Index} />
                    <Route path='/' exact component={LoginRegister} />
<<<<<<< HEAD
                    <Route path='/test' exact component={Test} />
=======
                    <Route path='/description' component={Descript} />
>>>>>>> d9347164ef4a9ebd5169cb210da49de403a84ee9
                </Switch>
            </Router>
        );
    }
}

