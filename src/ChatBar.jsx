import React, { Component } from 'react';

function ChatBar(props) {
    const currentUser = props.currentUser;

    const onKeyPress = event => {

        if (event.key === "Enter") {
            console.log(props);
            props.submitFunc(event.target.value);
            event.target.value = "";
        }

    };


    return (
        <footer className="chatbar">
        <input defaultValue = {currentUser.name} className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" onKeyPress={onKeyPress} placeholder="Type a message and hit ENTER" />
      </footer>
    );
}

export default ChatBar;