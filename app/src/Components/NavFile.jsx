import React from 'react'
import fileIcons from 'file-icons-js';

export default class NavFile extends React.Component {
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    render() {
        
        return (
            <div className="animated fadeInLeft sectioncontent space">
                <i style={{marginRight : '7px'}} className={fileIcons.getClassWithColor(this.props.text)}></i>
                <p className="sectiontext">{this.props.text}</p>
            </div>
        )
    }
}