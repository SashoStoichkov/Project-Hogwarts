import React from 'react';
import Textfield from '../Components/Textfield.jsx';

import {GotoLogin, GotoRegister} from "../LoginRegister.js"

import {Redirect} from 'react-router-dom'

import api from '../api'

export default class LoginRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            passwd: '',
            ready: false
        }

        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
        this.setPasswd = this.setPasswd.bind(this)
    }

    register(e) {
        e.preventDefault()
        api.register(new FormData(e.target), () => {}, (err) => {})
    }

    login(e) {
        e.preventDefault()
        api.login(new FormData(e.target), () => this.setState({ready: true}), () => {})
    }

    setPasswd(e) {
        this.setState({
            passwd: e.target.value
        })
    }

    render() {
        if (this.state.ready) {
            return <Redirect to="/code" />
        }
        return (
            <div id="description">   
                <div id="login_permition">
                    <div className="main_login">
                        <div style={{width: "100%", height: "100%"}} className="animated fadeIn card">
                            <form action="/login" method="POST" onSubmit={this.login}>
                                <div className="title">
                                    Log in
                                </div>
                                <div className="body">
                                    <Textfield holder="E-Mail or Username" type="text" name="uname" />
                                    <Textfield holder="Password" type="password" name="passwd" />
                                    <button type="submit" className="submit">Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="login">
                            <p className="text">If you haven't got registration</p>
                            <p className="text">you can register here.</p>
                            <button onClick={GotoRegister} className="btn">Register</button>
                        </div>
                        <div className="free"></div>
                    </div> 
                </div>
                <div id="register_permition">
                    <div className=" main_register">
                        <div style={{width: "100%", height: "100%"}} className=" animated fadeIn card">
                            <form action="/register" method="POST" onSubmit={this.register}>
                                <div className="title">
                                    Register
                                </div>
                                <div className="body">
                                    <Textfield holder="Username" type="text" name='uname' />
                                    <Textfield holder="Password" type="password" name="passwd" onInput={this.setPasswd} value={this.state.passwd} />
                                    <Textfield holder="Confirm password" type="password" pattern={this.state.passwd} />
                                    <Textfield holder="Key" type="password" name="key" />
                                    <button type="submit" className="submit">Register</button>
                                </div>
                            </form>
                        </div>
                        <div className="register">
                            <p className="text">If you have registration</p>
                            <p className="text">you can login here.</p>
                            <button onClick={GotoLogin} className="btn">Login</button>
                        </div>
                        <div className="free"></div>
                    </div>
                </div>
                <p style={{marginTop : '100%'}}> </p>
            </div>
        );
    }
} 
