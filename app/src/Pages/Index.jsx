import React from 'react'

import Textfield from '../Components/Textfield.jsx'
import Folder from '../Components/Folder.jsx'
import File from '../Components/File.jsx'
import NavBar from '../Components/NavBar.jsx'
import NavFile from '../Components/NavFile.jsx'
import NavFileContainer from '../Components/NavFileContainer.jsx'

import {
    Link
} from 'react-router-dom'

import bglogo from "../Images/bg_editor.png"

import AceEditor from 'react-ace'
import io from 'socket.io-client'

import brace from 'brace'

import 'brace/theme/monokai'
import 'brace/mode/python'
import 'brace/mode/javascript'
import 'brace/mode/jsx'
import 'brace/mode/c_cpp'
import 'brace/mode/assembly_x86'
import 'brace/mode/coffee'
import 'brace/mode/csharp'
import 'brace/mode/css'
import 'brace/mode/golang'
import 'brace/mode/groovy'
import 'brace/mode/html'
import 'brace/mode/java'
import 'brace/mode/json'
import 'brace/mode/less'
import 'brace/mode/scss'
import 'brace/mode/sql'
import 'brace/mode/swift'
import 'brace/mode/typescript'

import logo from '../Images/logo.png'

import api from '../api'

function get_file_type(f_name) {
    var ext = f_name.split('.').pop()
    switch(ext){
        case 'py': 
            return 'python';
        case 'js':
            return 'javascript'
        case 'jsx':
            return 'jsx';
        case 'c':
        case 'cpp':
        case 'cc':
        case 'h':
            return 'c_cpp';
        case 'asm':
            return 'assembly_x86';
        case 'coffee':
            return 'coffee';
        case 'cs':
            return 'csharp';
        case 'css':
            return 'css';
        case 'go':
            return 'golang';
        case 'groovy':
            return 'groovy';
        case 'html':
            return 'html';
        case 'java':
            return 'java';
        case 'json':
            return 'json';
        case 'less':
            return 'less';
        case 'scss':
            return 'scss';
        case 'sql':
            return 'sql';
        case 'swift':
            return 'swift';
        case 'ts':
            return 'typescript';
        default:
            return ''
    }
}

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.ws = io('http://'+ window.location.hostname +':5000/edit')

        this.ws.on('update', data => {
            if (data.file === this.state.file) {
                this.setState({
                    code: data.code
                    
                })
            }
        })

        this.state = {
            cursor_pos: {},
            code: "",
            file: "",
            open_files: [],
            file_structure: {},
            icon: "keyboard_arrow_right",
            display: "initial",
        }
        
        this.updateCode = this.updateCode.bind(this)
        this.updateCode = this.updateCode.bind(this)
        this.open_file = this.open_file.bind(this)
        this.remove_file = this.remove_file.bind(this)
        this.setWorkingFile = this.setWorkingFile.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        this.setState({
            display: this.state.display == 'none' ? 'block' : 'none',
            icon: this.state.icon == 'keyboard_arrow_right' ? 'keyboard_arrow_left' : 'keyboard_arrow_right',
        })
    }

    updateCode(newCode) {
        console.log(newCode)
        this.setState({
            code: newCode
        })
        this.ws.emit('update', {
            code: this.state.code,
            file: this.state.file
        })
    }

    onChange(newCode) {
        this.updateCode(newCode)
        this.ws.emit('update', {
            code: this.state.code,
            file: this.state.file
        })
    }

    open_file(path, name, add_new){
        add_new = typeof(add_new) == 'undefined' ? true : add_new
        
        api.get_file_content(path+'/'+name, resp => {
            for (var i = 0; i < this.state.open_files.length; i++) {
                if (this.state.open_files[i].filename == name && this.state.open_files[i].path == path) {
                    add_new = false;
                    break
                }
            }
            if (add_new) {
                this.setState({
                    code: resp.data,
                    open_files: [...this.state.open_files,
                        {
                            filename: name,
                            path: path
                        }
                    ],
                    file: path+'/'+name
                })
            } else {
                this.setState({
                    code: resp.data,
                    file: path+'/'+name
                })
            }
        }, () => {})
    }

    remove_file(path, name) {
        var new_open_files = this.state.open_files
        for (var i in new_open_files) {
            if (new_open_files[i].filename === name && new_open_files[i].path === path) {
                new_open_files.splice(i, 1)
                break;
            }
        }
        this.setState({
            open_files: new_open_files,
            code: ""
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

    componentWillMount() {
        api.get_folder_structure(resp => {
            this.setState({
                file_structure: resp.tree
            })
            console.log(resp.tree)
        }, () => {})
    }

    render() {
        var open_files = []
        console.log(this.state.open_files)
        for (var i of this.state.open_files) {
            open_files.push((
                <NavFileContainer open_file={this.open_file} remove_file={this.remove_file} filename={i.filename} path={i.path}/>
            ))
        }
        
        return (
            <div>
                <NavBar>
                    <i onClick={this.toggle} id="switch" class="material-icons">{this.state.icon}</i>
                    <img src={logo} id="logo"  className="animated pulse" alt="logo" />
                    {open_files}
                          
                </NavBar>
                <div id="leftside">
                    <Folder style={{display : this.state.display}} className="section spaceclear" id="sectionfield" text="Project Hogwarts" structure={this.state.file_structure} fileOnClick={this.open_file} path="./project" />
                </div>
                <div>
                    <div id="bglogo">
                        <AceEditor 
                            mode={get_file_type(this.state.file)}
                            theme="monokai"
                            fontSize={18}
                            showPrintMargin={false}
                            highlightActiveLine={true}
                            tabSize={4}
                            enableBasicAutocompletion={true}
                            enableLiveAutocompletion={true}
                            onChange={this.updateCode}
                            value={this.state.code}
                            ref="editor"
                        />
                    </div>
                    <iframe src="https://project-hogwarts.ht.cloudbalkan.com:4200/" id="terminal"  >
                        <p>Your browser does not support iframes.</p>
                    </iframe>
                </div>
            </div>
        );
    }
}
