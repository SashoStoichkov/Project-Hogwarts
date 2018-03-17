import React from 'react'
import fileIcons from 'file-icons-js';

export default class NavFile extends React.Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.props.onClick(this.props.path, this.props.text)
    }

    render() {
        return (
            <div className="animated fadeInLeft sectioncontent space" onClick={this.onClick}>
                <i style={{marginRight : '7px'}} className={fileIcons.getClassWithColor(this.props.text)}></i>
                <p className="sectiontext">{this.props.text}</p>
            </div>
        )
    }
}