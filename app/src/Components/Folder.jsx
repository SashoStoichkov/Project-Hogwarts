import React from 'react'

import File from './File'

export default class Folder extends React.Component {
    toggle(){
        this.setState({
            open: !this.state.open,
            icon: this.state.icon == 'keyboard_arrow_right' ? 'keyboard_arrow_down' : 'keyboard_arrow_right',
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
    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("div");
        ev.target.appendChild(document.getElementById(data));
    }
    allowDrop(ev) {
        ev.preventDefault();
    }
    render() {
        var children = []
        if (this.state.open) {
            for (var i in this.props.structure) {
                if (this.props.structure[i] === 'file') {
                    children.push((
                        <File text={i} onClick={this.props.fileOnClick} />
                    ))
                } else {
                    children.push((
                        <Folder structure={this.props.structure[i]} text={i} fileOnClick={this.props.fileOnClick} />
                    ))
                }
            }
        }
        return (
            <div onDragOver={this.allowDrop} onDrop={this.drop} className={"space " + this.props.className}>
                <div onClick={this.toggle} className="folder" id={this.props.id}>
                    <i className="material-icons">{this.state.icon}</i>
                    <p className="sectiontext">{this.props.text}</p>
                </div>
                {children}
            </div>
        )
    }
}