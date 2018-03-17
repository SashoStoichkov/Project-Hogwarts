import React from 'react'

import File from './File'

import { ContextMenu, Item, Separator, Submenu, ContextMenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

const FolderMenu = (props) => (
    <ContextMenu id={props.id}>
       <Item onClick={props.new_file}>New file</Item>
       <Item onClick={props.new_folder}>New folder</Item>
       <Separator />
       <Item onClick={props.rename}>Rename</Item>
       <Item onClick={props.delete}>Delete</Item>
    </ContextMenu>
);

export default class Folder extends React.Component {
    toggle(){
        this.setState({
            open: !this.state.open,
            icon: this.state.icon == 'keyboard_arrow_right' ? 'keyboard_arrow_down' : 'keyboard_arrow_right',
        })
    }
    constructor(props){
        super(props)
        this.state={
            open: false,
            icon: "keyboard_arrow_right",

        }
        this.toggle = this.toggle.bind(this)
    }
    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    allowDrop(ev) {
        ev.preventDefault();
    }
    render() {
        var children = []

        if (this.state.open) {
            for (var i in this.props.structure) {
                if (this.props.structure[i].type === 'file') {
                    children.push((
                        <File 
                            text={i} 
                            onClick={this.props.fileOnClick} 
                            path={this.props.path} 
                            rename={this.props.rename} 
                            delete={this.props.delete} 
                        />
                    ))
                } else {
                    children.push((
                        <Folder 
                            style={this.props.style} 
                            structure={this.props.structure[i].content} 
                            text={i} 
                            fileOnClick={this.props.fileOnClick} 
                            path={this.props.structure[i].path}

                            rename={this.props.rename}
                            delete={this.props.delete}
                            new_file={this.props.new_file}
                            new_folder={this.props.new_folder}
                        />
                    ))
                }
            }
        }

        console.log(this.props)

        return (
            <div id="menu_id" onDragOver={this.allowDrop} onDrop={this.drop} className={"space " + this.props.className} style={this.props.style}>
                <ContextMenuProvider id={this.props.path}>
                    <div onClick={this.toggle} className="folder" id={this.props.id}>
                        <i className="material-icons">{this.state.icon}</i>
                        <p className="sectiontext">{this.props.text}</p>
                    </div>
                </ContextMenuProvider>
                <FolderMenu 
                    rename={() => this.props.rename(this.props.path)}
                    delete={() => this.props.delete(this.props.path)}
                    new_file={() => this.props.new_file(this.props.path)}
                    new_folder={() => this.props.new_folder(this.props.path)}
                    id={this.props.path}
                />
                {children}
            </div>
        )
    }
}