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

import 'brace/theme/monokai'
import 'brace/mode/python'



export default class Index extends React.Component {
    render() {
        return (
            <div>
                
                <NavBar>
                    <img src="https://static.interestingengineering.com/images/import/2016/09/BLUE-SKY.jpg" id="logo"  alt="logo" />
                    <Link to="#">LogIn/Register</Link>
                    <Link to="#">Link</Link>
                    <Link to="#">Link</Link>
                    <Link to="#">For us</Link>                    
                </NavBar>

                <div id="leftside">
                    
                    <Section text="Project Hogwarts">
                        <Folder text="app">
                            <File text="index.html"/>
                            
                        </Folder>
                        
                    </Section>
                </div>
                <div>
                    <AceEditor />
                </div>
                
            </div>
        );
    }
}
