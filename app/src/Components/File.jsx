import React from 'react'
import fileIcons from 'file-icons-js';

import { ContextMenu, Item, Separator, Submenu, ContextMenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

const FileMenu = (props) => (
    <ContextMenu id='file_id'>
       <Item onClick={props.rename}>Rename</Item>
       <Item onClick={props.delete}>Delete</Item>
    </ContextMenu>
);

export default class File extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick(e) {
        this.props.onClick(this.props.path, this.props.text)
    }
    
    render() {
        return (
            <div>   
                <ContextMenuProvider id="file_id">         
                    <div className="animated fadeInLeft sectioncontent space" onClick={this.onClick} >
                        <i style={{marginRight : '7px'}} className={fileIcons.getClassWithColor(this.props.text)}></i>
                        <p className="sectiontext">{this.props.text}</p>
                    </div>
                </ContextMenuProvider>
                <FileMenu rename={this.props.rename} delete={this.props.delete} />
            </div>  
        )
    }
}