import React from 'react'

import{
    Layout,
    Header,
    Drawer,
    Navigation,
    Content,
    HeaderRow,
    Textfield
} from 'react-mdl'

import 'react-mdl/extra/css/material.blue-pink.min.css'
import 'react-mdl/extra/material.js'

import {
    Link
} from 'react-router-dom'

export default class Descript extends React.Component{
    render(){
        return(
            <Layout style={{background: '(../Images/Siera.png) center / cover'}}>
                <Header transparent title="CodeHub" style={{color: 'white'}}>
                    <Navigation>
                        <Link to="#">LogIn/Register</Link>
                        <Link to="#">Code Editor</Link>
                        <Link to="#">For Us</Link>
                    </Navigation>
                </Header>
                <Drawer title="CodeHub">
                    <Navigation>
                        <Link to="#">LogIn/Register</Link>
                        <Link to="#">Code Editor</Link>
                        <Link to="#">For Us</Link>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
        )
    }
}