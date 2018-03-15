import React from 'react'

import api from '../api'

export default class Login extends React.Component {
    onSubmit(e) {
        e.preventDefault()
        api.login(new FormData(e.target), () => {}, () => {})
    }
    render() {
        return (
            <form action='/login' method='post' onSubmit={this.onSubmit}>
                <input type="text" placeholder="Email or username" name="uname" />
                <input type="password" placeholder="Password" name="passwd" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
