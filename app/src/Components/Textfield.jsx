import React from 'react'

var inputStyle = {
    width: "100%", 
    background: "white", 
    color: "#538de9", 
    fontSize: "20px", 
    border: "0px solid", 
    outline: "none", 
    paddingLeft: "10px"
}
var line = {
    width: "100%",
    height: "2px",
    background: "#aaa",
    borderRadius: "2px"
}

var wrap = {
    marginTop: "30px"
}

export default class Textfield extends React.Component {
    render() {
        return (
            <div style={wrap}>
                <input placeholder={this.props.holder} type={this.props.type} id={this.props.id} name={this.props.name} style={inputStyle}/>
                <div style={line}></div>
            </div>
        )
    }
}