import React from 'react'

export default class NavBar extends React.Component{
    render(){
        return(
            <div className='navbar'>
                {this.props.children}
            </div>
            
        )
    }
}