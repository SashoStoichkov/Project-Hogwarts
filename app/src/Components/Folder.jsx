import React from 'react'

export default class Folder extends React.Component {
    toggle(){
        this.setState({
            open: !this.state.open,
            icon: "keyboard_arrow_down",
        })
    }
    constructor(props){
        super(props)
        this.state={
            open: false,
            icon: "keyboard_arrow_right",
        }
        this.toggle = this.toggle.bind(this)
    }
    render() {       
        return (
            <div>
                <div onClick={this.toggle} className="folder">
                    <i className="material-icons">{this.state.icon}</i>
                    <p className="sectiontext">{this.props.text}</p>
                </div>
                {this.state.open && 
                    this.props.children
                }
            </div>
        )
    }
}