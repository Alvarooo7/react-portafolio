import React, { Component } from 'react';
import logo from './logo.svg';
import './Portafolio.css';

class Portafolio extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.projects = [
            "react-portafolio",
            "react-table"
        ];
    }
    projects_images() {
        var images = [];
        if (window.location.pathname.startsWith("/react-portafolio")) {
            var starting_with = ".";
        }
        else {
            var starting_with = "./react-portafolio";
        }
        this.projects.map((project) => {
            images.push((
                <img src={starting_with + "/img/projects/" + project + ".png"}/>
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
