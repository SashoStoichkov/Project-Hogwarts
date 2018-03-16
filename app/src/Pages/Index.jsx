import React from 'react'

import Textfield from '../Components/Textfield.jsx'
import Section from '../Components/Section.jsx'
import Folder from '../Components/Folder.jsx'
import File from '../Components/File.jsx'
import NavBar from '../Components/NavBar.jsx'

import {
    Link
} from 'react-router-dom'

import AceEditor from 'react-ace'
import io from 'socket.io-client'

import brace from 'brace'

import 'brace/themes/monokai'
import 'brace/mode/python'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                
                <NavBar>
                    <img src="https://static.interestingengineering.com/images/import/2016/09/BLUE-SKY.jpg" id="logo"  alt="logo" />
                    <Link to="#">Link</Link>
                    <Link to="#">Link</Link>
                    <Link to="#">Link</Link>
                    <Link to="#">Link</Link>                    
                </NavBar>
                <div id="leftside">
                    
                    <Section text="Project Hogwarts">
                        <Folder text="app">
                            <File text="index.html"/>
                        </Folder>
                    </Section>
                </div>
<<<<<<< HEAD
=======
                
>>>>>>> ceb6fae740e0617ac0b74e38015a9c987bb55bfe
            </div>
        );
    }
}
