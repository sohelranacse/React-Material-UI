import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
// import $ from 'jquery';

export default class Navbar extends Component {

    sidebarCollapse() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("active");
        // $('#sidebar').toggleClass('active');
    }

    render() {
        return (
            <nav id="sidebar">
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={this.sidebarCollapse}>
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>

                <div className="p-3">
                    <h4><NavLink exact to="/" className="logo">React Material UI</NavLink></h4>

                    <ul className="list-unstyled components mb-4">
                        <li><NavLink exact to="/">Home</NavLink></li>

                        <li className="active">
                            <a href="#components" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Components</a>
                            <ul className="collapse list-unstyled" id="components">
                                <li><NavLink exact to="/auto-complete">Auto Complete</NavLink></li>
                                <li><NavLink exact to="/button">Button</NavLink></li>
                                <li><NavLink exact to="/button-group">Button Group</NavLink></li>
                            </ul>
                        </li>

                        <li><NavLink exact to="/readme">Read Me</NavLink></li>
                    </ul>

                    <div className="footer">
                        <p>
                            <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">Source</a> | &nbsp;
                            <a href="https://programmingd.com" target="_blank" rel="noopener noreferrer">Github</a> | &nbsp;
                            <a href="https://github.com/sohelranacse/react" target="_blank" rel="noopener noreferrer">Sohel</a>
                        </p>
                    </div>
                </div>
            </nav>
        );
    }
}
