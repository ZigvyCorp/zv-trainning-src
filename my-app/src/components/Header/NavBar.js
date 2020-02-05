import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {


  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
        <div className="nav-header">
            <Link to="/">
              
            </Link>
          </div>
          <ul
            className= "nav-links show-nav"
          >
            <li>
              <Link to="#">FIND MATCH</Link>
            </li>
            <li>
              <Link to="/">GROUNDS</Link>
            </li>
            <li>
              <Link to="#">MESSAGE</Link>
            </li>
            <li>
              <Link to="#">UPCOMING</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}