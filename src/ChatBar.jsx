import React, { Component } from 'react';

function ChatBar(props) {
    const currentUser = props.currentUser;
    const onChatPress = event => {
        if (event.key === "Enter") {
            console.log(props);
            props.submitChat(event.target.value);
            event.target.value = "";
        }
    };

   const onUserPress = event => {
        if (event.key === "Enter") {
            console.log(props);
            props.updateUser(event.target.value);
        }

   }

    return (
        <footer className="chatbar">
        <input defaultValue = {currentUser.name} onKeyPress={onUserPress}  className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" onKeyPress={onChatPress} placeholder="Type a message and hit ENTER" />
      </footer>
    );
}

export default ChatBar;