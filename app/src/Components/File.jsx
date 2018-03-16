import React from 'react'
import fileIcons from 'file-icons-js';

export default class File extends React.Component {
    render() {
        
        return (
            <div className="sectioncontent space" onClick={this.props.onClick} >
                <i style={{marginRight : '7px'}} className={fileIcons.getClassWithColor(this.props.text)}></i>
                <p className="sectiontext">{this.props.text}</p>
            </div>
        )
    }
}