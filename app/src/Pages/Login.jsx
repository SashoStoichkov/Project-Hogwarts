import React from 'react'

import api from '../api'

import {Redirect} from 'react-router-dom'

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            logged_in: sessionStorage.getItem('logged_in')
        }
    }
    onSubmit(e) {
        e.preventDefault()
        api.login(new FormData(e.target), () => {
            this.setState({
                logged_in: true
            })
        }, (data) => {
            alert(data.error)
        })
    }
    render() {
        if (this.state.logged_in) {
            return <Redirect to='/home' />
        }
        return (
            <form action='/login' method='post' onSubmit={this.onSubmit}>
                <input type="text" placeholder="Email or username" name="uname" />
                <input type="password" placeholder="Password" name="passwd" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
