import React from 'react'

import File from './File'

import { ContextMenu, Item, Separator, Submenu, ContextMenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

const FolderMenu = () => (
    <ContextMenu id='folder_id'>
       <Item>New file</Item>
       <Item>New folder</Item>
       <Separator />
       <Item>Rename</Item>
       <Item>Delete</Item>
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

        console.log(this.props.structure)
        if (this.state.open) {
            for (var i in this.props.structure) {
                if (this.props.structure[i].type === 'file') {
                    children.push((
                        <File text={i} onClick={this.props.fileOnClick} path={this.props.path} />
                    ))
                } else {
                    children.push((
                        <Folder style={this.props.style} structure={this.props.structure[i].content} text={i} fileOnClick={this.props.fileOnClick} path={this.props.structure[i].path} />
                    ))
                }
            }
        }
        return (
            <div id="menu_id" onDragOver={this.allowDrop} onDrop={this.drop} className={"space " + this.props.className} style={this.props.style}>
                <ContextMenuProvider id="folder_id">
                    <div onClick={this.toggle} className="folder" id={this.props.id}>
                        <i className="material-icons">{this.state.icon}</i>
                        <p className="sectiontext">{this.props.text}</p>
                    </div>
                </ContextMenuProvider>
                <FolderMenu />
                {children}
            </div>
        )
    }
}