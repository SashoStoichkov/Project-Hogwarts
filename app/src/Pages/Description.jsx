import React from 'react'

import{
    Layout,
    Header,
    Navigation,
    Content,
    Card,
    CardTitle,
    CardText,
    CardActions,
    Button,
    CardMenu,
    IconButton
} from 'react-mdl'

import 'react-mdl/extra/css/material.blue-pink.min.css'
import 'react-mdl/extra/material.js'

import {
    Link
} from 'react-router-dom'

import logo from "../Images/icon.png";

export default class Descript extends React.Component{
    render(){
        return(
            <Layout>
                <Header transparent title={
                    <span style={{display : 'flex'}} >
                        <img src={logo} width="40" height="40" alt="icon_logo" />
                        <span style={{display : 'flex', marginTop: '8px'}}>odeHub</span>
                    </span>
                }>
                    
                    <Navigation>
                        <Link to="#">LogIn/Register</Link>
                        <Link to="#">Code Editor</Link>
                        <Link to="#">For Us</Link>
                    </Navigation>
                </Header>
            </Layout>
        )
    }
}