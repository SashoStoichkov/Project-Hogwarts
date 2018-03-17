import React from 'react'

import Textfield from '../Components/Textfield.jsx'
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

import api from '../api'

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
}

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.ws = io('http://'+ window.location.hostname +':5000/edit')

        this.ws.on('update', data => {
            if (data.file === this.state.file) {
                this.setState({
                    code: data.file
                })
            }
        })
        
        this.state = {
            cursor_pos: {},
            code: "",
            file: "",
            open_files: [],
            file_structure: {}
        }

        api.get_folder_structure(resp => {
            this.setState({
                file_structure: resp.tree
            })
            console.log(resp.tree)
        }, () => {})

        this.updateCode = this.updateCode.bind(this)
        this.updateCode = this.updateCode.bind(this)
        this.double = this.double.bind(this)
        this.remove_file = this.remove_file.bind(this)
        this.setWorkingFile = this.setWorkingFile.bind(this)
    }

    updateCode(newCode) {
        this.setState({
            code: newCode
        })
    }

    onChange(newCode) {
        this.updateCode(newCode)
        this.ws.emit('update', {
            code: this.state.code,
            file: this.state.file
        })
    }

    double(e, path){
        if (e.target.tagName == "P") {
            if (!this.state.open_files.includes(e.target.innerHTML)) {
                this.setState({
                    open_files: [...this.state.open_files, 
                        {
                            name: e.target.innerHTML,
                            path: path
                        }
                    ]
                })
            }
        } else {
            if (!this.state.open_files.includes(e.target.children[1].innerHTML)) {
               this.setState({
                    open_files: [...this.state.open_files,
                        {
                            name: e.target.children[1].innerHTML,
                            path: path
                        }
                    ]
                })
            }
        }
    }

    remove_file(e) {
        var new_open_files = this.state.open_files.remove(e.target.parentNode.children[0].children[1].innerHTML)
        this.setState({
            open_files: new_open_files
        })
    }

    setWorkingFile(e, path) {
        const comp = this
        api.get_file_content(path, resp => {
            comp.setState({
                code: resp.data
            })
        }, () => {})
    }

    render() {
        var open_files = []
        for (var i of this.state.open_files) {
            open_files.push(<div style={{display: 'flex', marginTop : '10px'}}><File text={i.name} onClick={this.setWorkingFile} path={i.path} /><i className="clear material-icons" onClick={this.remove_file}>clear</i></div>)
        }

        return (
            <div>
                <NavBar>
                    <img src={logo} id="logo"  className="animated pulse" alt="logo" />
                    {open_files}
                          
                </NavBar>
                <div id="leftside">
                    <Folder className="section spaceclear" id="sectionfield" text="Project Hogwarts" structure={this.state.file_structure} fileOnClick={this.double} path="" />
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
