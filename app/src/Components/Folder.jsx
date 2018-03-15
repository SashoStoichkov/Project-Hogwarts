import React from 'react'

export default class Folder extends React.Component {
    render() {
        return (
            <div>
                <div className="sectioncontent">
                    <i class="material-icons">keyboard_arrow_right</i>
                    <p className="sectiontext">{this.props.text}</p>
                </div>
                {this.props.children}
            </div>
        )
    }
}