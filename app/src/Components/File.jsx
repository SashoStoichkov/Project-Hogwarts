import React from 'react'
import fileIcons from 'file-icons-js';

export default class File extends React.Component {
    drag(ev) {
        ev.dataTransfer.setData("div", ev.target.id);
    }

    onClick(e) {
        console.log("onClick Event fired")
        this.props.onClick(e, this.props.path + this.props.text)
    }
    
    render() {
        console.log(this.props.path + this.props.text)
        return (
            <div onDragStart={this.drag} draggable="true" className="animated fadeInLeft sectioncontent space" onClick={this.props.onClick} >
                <i style={{marginRight : '7px'}} className={fileIcons.getClassWithColor(this.props.text)}></i>
                <p className="sectiontext">{this.props.text}</p>
            </div>
        )
    }
}