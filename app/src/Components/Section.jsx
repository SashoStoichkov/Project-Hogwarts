import React from 'react'

import Folder from "./Folder.jsx"

export default class Section extends React.Component {
    render() {
        return (
			<div className="section">
                <div id="sectionfield" className="sectioncontent">
                    <i className="material-icons">keyboard_arrow_right</i>
                    <p className="sectiontext">{this.props.text}</p>    
                </div>
                {this.props.children}
            </div>
        )
    }
}