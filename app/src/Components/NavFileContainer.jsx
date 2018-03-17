import React from 'react'

import NavFile from './NavFile'

export default class NavFileContainer extends React.Component {
    constructor(props) {
        super(props)

        this.remove_file = this.remove_file.bind(this)
    }
    remove_file() {
        console.log('File should be removed')
        this.props.remove_file(this.props.path, this.props.filename, false)
    }
    render() {
        return (
            <div style={{display: 'flex', marginTop : '10px'}}>
                <NavFile text={this.props.filename} path={this.props.path} onClick={this.props.open_file}/>
                <i className="clear material-icons" onClick={this.remove_file}>clear</i>
            </div>
        )
    }
}
