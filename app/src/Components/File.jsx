import React from 'react'

export default class File extends React.Component {
    render() {
        return (
            <div className="sectioncontent">
                <i class="material-icons">description</i>
                <p className="sectiontext">{this.props.text}</p>
            </div>
        )
    }
}