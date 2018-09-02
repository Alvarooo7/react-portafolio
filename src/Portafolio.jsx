import React, { Component } from 'react';
import logo from './logo.svg';
import './Portafolio.css';

class Portafolio extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.projects = [
            "react-portafolio",
        ];
    }
    projects_images() {
        var images = [];
        this.projects.map((project) => {
            images.push((
                <img src={"./" + project + "/img/projects/" + project + ".png"}/>
            ));
        });
        return images;
    }
    render() {
        return (
            <div>
              {this.projects_images()}
            </div>
        );
    }
};

export default Portafolio;
