import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: { name: "Anonymous" }, // optional. if currentUser is not defined, it means the user is Anonymous
            messages: [],
            onlineUsers:0
        }

    }


    componentDidMount() {
        this.socket = new WebSocket("ws://172.46.0.229:3001");
        console.log("componentDidMount <App />");
        setTimeout(() => {
            console.log("Simulating incoming message")
        }, 3000);

        this.socket.onmessage = (msg) => {
            const parsedMessage = JSON.parse(msg.data);

            if (parsedMessage.type === "incomingMessage") {

                console.log(parsedMessage);
                const oldMessages = this.state.messages;
                const newMessages = [...oldMessages, parsedMessage];
                this.setState({ messages: newMessages });

            }

            else if(parsedMessage.type === "incomingNotification"){
                console.log(parsedMessage);
                const oldMessages = this.state.messages;
                const newMessages = [...oldMessages, parsedMessage];
                this.setState({ messages: newMessages });

            }

            else if (parsedMessage.type === "onlineUsers"){
                console.log(parsedMessage.content);
                this.setState({ onlineUsers: parsedMessage.content });
            }

            else{
                throw new Error("Unknown event type " + parsedMessage.type);
            }
        }
    }

    //This function creates a new message and appends it to old messages and sets the State with setState function.
    submitChat = (str) => {
        const newMessage = {
            type: "postMessage",
            username: this.state.currentUser.name,
            content: str
        }

        this.socket.send(JSON.stringify(newMessage));
    }

    //This function updates the current user with the new user.
    updateUser = (str) => {
        const newUser = { name: str }

        const postNotification = {
            type: "postNotification",
            content: `${this.state.currentUser.name} has changed his name to ${str}`
        }

        this.setState({ currentUser: newUser });
        this.socket.send(JSON.stringify(postNotification));

    }

    render() {
        return (
            <div>
      <NavBar onlineUsers = {this.state.onlineUsers} />
      <MessageList messages = {this.state.messages}/>
      <ChatBar currentUser = {this.state.currentUser} submitChat = {this.submitChat} updateUser = {this.updateUser}/>
      </div>
        );

    }
}
export default App;