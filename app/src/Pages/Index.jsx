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
    constructor(props) {
        super(props)
        this.ws = io('http://project-hogwarts.ht.cloudbalkan.com/edit')
        this.state = {
            cursor_pos: {},
            code: "",
            file: "",
            open_files: []
        }

        this.updateCode = this.updateCode.bind(this)
        this.updateCursor = this.updateCursor.bind(this)
        this.updateCode = this.updateCode.bind(this)
        this.double = this.double.bind(this)
    }

    updateCursor() {
        this.setState({
            cursor_pos: this.refs.editor.editor.selection.getCursor()
        })
    }

    updateCode(newCode) {
        this.setState({
            code: newCode
        })
    }

    sendChanges() {
        this.ws.emit('update', {
            cursor_pos: this.state.cursor_pos,
            code: this.state.code,
            file: this.state.file
        })
    }
    double(e){
        if (e.target.tagName == "P") {
            if (!this.state.open_files.includes(e.target.innerHTML)) {
                this.setState({
                    open_files: [...this.state.open_files, 
                        e.target.innerHTML
                    ]
                })
            }
        } else {
            if (!this.state.open_files.includes(e.target.children[1].innerHTML)) {
               this.setState({
                    open_files: [...this.state.open_files,
                        e.target.children[1].innerHTML
                    ]
                })
            }
        }
    }
    render() {
        const open_files = []
        for (var i of this.state.open_files) {
            open_files.push(<File text={i} />, <i className="clear material-icons">clear</i>)
        }
        return (
            <div>
                <NavBar>
                    <img src={logo} id="logo"  alt="logo" />
                    <div style={{display: 'flex', marginTop : '10px'}}>
                        {open_files}
                       
                    </div>     
                </NavBar>
                <div id="leftside">
                    <Section text="Project Hogwarts">
                        <Folder text="app">
                            <Folder text="app">
                            <File onClick={this.double} text="index.html"/>
                                <File onClick={this.double} text="index.js"/>
                                <Folder text="app">
                                    <File onClick={this.double} text="index.css"/>
                                    <Folder text="app">
                                        <File onClick={this.double} text="index.jsx"/>
                                        <Folder text="app">
                                            <File  onClick={this.double} text="index.py"/>
                                            <Folder text="app">
                                                <File  onClick={this.double} text="index.c"/>
                                            </Folder>
                                        </Folder>
                                    </Folder>
                                </Folder>
                            </Folder>
                        </Folder>
                    </Section>
                </div>
                <div>
                    <AceEditor 
                        mode="javascript"
                        theme="monokai"
                        fontSize={18}
                        showPrintMargin={false}
                        highlightActiveLine={true}
                        tabSize={4}
                        enableBasicAutocompletion={true}
                        enableLiveAutocompletion={true}
                        onChange={this.updateCode}
                        onCursorChange={this.updateCursor}
                        value={this.state.code}
                        ref="editor"
                    />
                </div>
            </div>
        );
    }
}
