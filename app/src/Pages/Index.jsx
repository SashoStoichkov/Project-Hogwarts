import React from 'react'

import Textfield from '../Components/Textfield.jsx'
import Section from '../Components/Section.jsx'
import Folder from '../Components/Folder.jsx'
import File from '../Components/File.jsx'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <div id="leftside">
                    <img src="https://static.interestingengineering.com/images/import/2016/09/BLUE-SKY.jpg" id="logo"  alt="logo" />
                    <Section text="Project Hogwarts">
                        <Folder text="app">
                            <File text="index.html"/>
                        </Folder>
                    </Section>
                </div>

            </div>
        );
    }
}
