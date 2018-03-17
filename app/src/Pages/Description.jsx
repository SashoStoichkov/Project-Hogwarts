import React from 'react'

import{
    Layout,
    Header,
    Navigation,
    Content,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardText,
    Button
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
                    <span  className="animated jackInTheBox" style={{display : 'flex'}} >
                        <img src={logo} width="40" height="40" alt="icon_logo" />
                        <span style={{display : 'flex', marginTop: '8px'}}>odeHub</span>
                    </span>
                }>
                    <Navigation>
                        <Button style={{width : '150px', fontSize: "18px", height : "60px", marginTop : '10px', borderRadius : '40px'}} raised colored ripple>Download</Button>
                    </Navigation>
                </Header>
                <Content>
                    <Grid>
                        <Cell col={3}></Cell>
                        <Cell col={6}>
                            <Card shadow={4}  style={{width: '100%', height: '100%'}}>
                                <CardTitle>Welcome</CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardText>
                            </Card>
                        </Cell>
                    </Grid>
                </Content>
            </Layout>
        )
    }
}