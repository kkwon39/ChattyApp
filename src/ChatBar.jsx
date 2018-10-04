import React, { Component } from 'react';

//This is a ChatBar functional component
function ChatBar(props) {
    const currentUser = props.currentUser;
    const onChatPress = event => {
        if (event.key === "Enter") {
            console.log(props);
            props.submitChat(event.target.value);
            event.target.value = "";
        }
    };

//When the user changes the user name, this function handles it when Enter key is pressed.
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