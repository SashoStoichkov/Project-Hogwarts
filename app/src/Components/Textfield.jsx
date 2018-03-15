import React from 'react'

export default class Textfield extends React.Component {
    render() {
        return (
			<div>
                <input placeholder={this.props.holder} type={this.props.type} id={this.props.id} name={this.props.name}/>
            </div>
        )
    }
}