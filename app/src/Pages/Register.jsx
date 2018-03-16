import React from 'react'

import api from '../api'

import {Redirect} from 'react-router-dom'

export default class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            passwd: '',
            regsitered: false
        }

        this.onInput = this.onInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInput(e) {
        this.setState({
            passwd: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        api.register(
            new FormData(e.target), 
            () => this.setState({
                regsitered: true
            }), 
            data => alert(data.error)
        )
    }

    render() {
        if (this.state.regsitered) {
            return <Redirect to='/login' />
        }
        return (
            <form action="/register" method="post" onSubmit={this.onSubmit}>
                <input type="text" name="uname" placeholder="Username" />
                <input type="email" name="email" placeholder="E-mail" />
                <input type="password" name="passwd" placeholder="Password" onInput={this.state.onInput} />
                <input type="password" placeholder="Password" pattern={this.state.passwd} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
