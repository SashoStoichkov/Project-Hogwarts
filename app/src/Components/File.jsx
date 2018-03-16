import React from 'react'
import fileIcons from 'file-icons-js';

export default class File extends React.Component {
    
    render() {
        return (
            <div className="sectioncontent space">
                <i className={fileIcons.getClassWithColor(this.props.text)}>description</i>
                <p className="sectiontext">{this.props.text}</p>
            </div>
        )
    }
}