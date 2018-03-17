import React from 'react';

export default class Test extends React.Component {
    render() {
        return (
            <div>
                <iframe src="https://project-hogwarts.ht.cloudbalkan.com:4200/" style={{ width: "600px", height: "400px", background: "#666", color: "green" }} >
                    <p>Your browser does not support iframes.</p>
                </iframe>
            </div>    
        );
    }
}