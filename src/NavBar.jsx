import React, { Component } from 'react';

function NavBar(props) {
    return (<nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
  <span className= "navbar-username">{props.onlineUsers} users online</span>
    </nav>)
}

export default NavBar;