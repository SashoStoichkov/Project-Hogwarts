import React from 'react';

export default class CardImage extends React.Component {
    render(){
        return (
            <div className="mdl-card__actions" style={{ background: "url("+this.props.url+") center/cover", height: this.props.height }}>

            </div>  
        );
    }
}