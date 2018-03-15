import React from 'react'

export default class Section extends React.Component {
    render() {
        return (
			<div className="section">
                <div id="tag"><i class="material-icons">keyboard_arrow_right</i>{this.props.text}</div>
                {this.props.children}
            </div>
        )
    }
}