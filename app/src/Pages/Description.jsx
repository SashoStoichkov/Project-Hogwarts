import React from 'react'

import{
    Layout,
    Header,
    Navigation,
    Content,
    Card,
    CardTitle,
    CardText,
    Grid,
    Cell,
    Button,
    List,
    ListItem,
    ListItemContent
} from 'react-mdl'

import thumbnail from "../Images/team.png"
import CardImage from '../Components/CardImage.jsx'
import CodeHub from "../Images/logo35.png"
import 'react-mdl/extra/css/material.blue-pink.min.css'
import 'react-mdl/extra/material.js'

import {
    Link
} from 'react-router-dom'

import logo from "../Images/icon.png";

export default class Descript extends React.Component{
    render(){
        return(
            <Layout id="description">
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
                        <Cell col={2}></Cell>
                        <Cell col={4}>
                            <Card shadow={4}  style={{width: '100%', height: '100%'}}>
                                <CardTitle>Добре дошли!</CardTitle>
                                <CardText style={{textAlign: 'center', fontSize : '18px'}}>
                                    Здравейте! На път сте да си свалите нещо, 
                                    което ще промени изцяло представите Ви за кодов редактор!
                                    <br/>
                                    <br/>                                    
                                    Преставяме на Вашето внимание - CodeHub!!!
                                    <br/>
                                    <br/>                                    
                                    С това уникално WEB приложение, Вие и Вашите <br/> колеги/съученици/състуденти ще можете да работите върху някой Ваш технологичен проект.
                                    <br/>
                                    <br/>                                    
                                    Други позитиви на CodeHub са, че когато някой прави промени по даден файл, 
                                    всички останали в екипа виждат промяната в реално време, качва ги на сървър и 
                                    може да се използва вградения от екипа на Project Hogwarts терминал.
                                    <br/>
                                    <br/>
                                    Свалете WEB приложението СЕГА!!!
                                    <br/>
                                    <br/>
                                    <br/>                                    
                                </CardText>
                                <CardImage height="335px" url={CodeHub}/>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card shadow={4} style={{width: '600px', height: '100%'}}>
                                <CardTitle>Екипът:</CardTitle>
                                <CardImage height="335px" url={thumbnail}/>
                                <CardText>
                                    <List>
                                        <ListItem twoLine>
                                            <ListItemContent subtitle="Front-End, Акъл provider" avatar="person">Александър Стоичков</ListItemContent>
                                        </ListItem >
                                        <ListItem twoLine>
                                            <ListItemContent subtitle="Front-End, FullDesign" avatar="person">Иван Димитров</ListItemContent>
                                        </ListItem>
                                        <ListItem twoLine>
                                            <ListItemContent subtitle="Back-End, Front-End, App Functionality" avatar="person">Кристиян Йочев</ListItemContent>
                                        </ListItem>
                                        <ListItem twoLine>
                                            <ListItemContent subtitle="Photoshop" avatar="person">Виктор Петров</ListItemContent>
                                        </ListItem>
                                        <ListItem twoLine>
                                            <ListItemContent subtitle="SysAdmin, Server maniac, Front-End" avatar="person">Георги Корчаков</ListItemContent>
                                        </ListItem>
                                    </List>
                                </CardText>
                            </Card>
                        </Cell>
                    </Grid>
                </Content>
            </Layout>
        )
    }
}