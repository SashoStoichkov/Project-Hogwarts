import React from 'react';
import Textfield from '../Components/Textfield.jsx';

import {GotoLogin, GotoRegister} from "../LoginRegister.js"

export default class LoginRegister extends React.Component {
  render() {
    return (
        <div>
            <div id="login_permition">
                <div className="main_login">
                    <div style={{width: "100%", height: "100%"}} className="card">
                        <form action="/login" method="POST">
                            <div className="title">
                                Log in
                            </div>
                            <div className="body">
                                <Textfield holder="E-Mail" type="email" />
                                <Textfield holder="Password" type="password" />
                                <button type="submit" className="submit btn">Login</button>
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
                <div className="main_register">
                    <div style={{width: "100%", height: "100%"}} className="card">
                        <form action="/register" method="POST">
                            <div className="title">
                                Register
                            </div>
                            <div className="body">
                                <Textfield holder="Username" type="text" />
                                <Textfield holder="E-Mail" type="email" />
                                <Textfield holder="Password" type="password" />
                                <Textfield holder="Confirm password" type="password" />
                                <button type="submit" className="submit btn">Register</button>
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
        </div>
    );
  }
} 
