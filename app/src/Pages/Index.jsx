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
import 'brace/mode/javascript'

import logo from '../Images/logo.png'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <NavBar>
                    <img src={logo} id="logo"  alt="logo" />
                    <Link to="#">LogIn/Register.jsx</Link>
                    <Link to="#">Index.html</Link>                    
                </NavBar>
                <div id="leftside">
                    <Section text="Project Hogwarts">
                        <Folder text="app">
                            <File text="index.html"/>
                            <Folder text="app">
                                <File text="index.html"/>
                                <Folder text="app">
                                    <File text="index.html"/>
                                    <Folder text="app">
                                        <File text="index.html"/>
                                        <Folder text="app">
                                            <File text="index.html"/>
                                            <Folder text="app">
                                                <File text="index.html"/>
                                            </Folder>
                                        </Folder>
                                    </Folder>
                                </Folder>
                            </Folder>
                        </Folder>
                    </Section>
                </div>
                <div>
<<<<<<< HEAD
                    <AceEditor 
                        mode="javascript"
                        theme="monokai"
                        fontSize={18}
                        showPrintMargin={false}
                        highlightActiveLine={true}
                        tabSize={4}
                        enableBasicAutocompletion={true}
                        enableLiveAutocompletion={true}
                    />
=======
                    <AceEditor theme="monokai" />
>>>>>>> b95a0bb15df91f70155d24f6252628c7cb4b7bb9
                </div>
            </div>
        );
    }
}
