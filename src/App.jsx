import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: { name: "Anonymous" }, // optional. if currentUser is not defined, it means the user is Anonymous
            messages: []
        }

    }


    componentDidMount() {
        this.socket = new WebSocket("ws://localhost:3001");
        console.log("componentDidMount <App />");
        setTimeout(() => {
            console.log("Simulating incoming message")
        }, 3000);

        this.socket.onmessage = (msg) => {

            const parsedMessage = JSON.parse(msg.data);
            console.log(parsedMessage);
            const oldMessages = this.state.messages;
            const newMessages = [...oldMessages, parsedMessage];
            this.setState({ messages: newMessages });
            console.log(this.socket);

        }
    }

    //This function creates a new message and appends it to old messages and sets the State with setState function.
    submitChat = (str) => {
        const newMessage = {
            username: "",
            content: str
        }

        this.socket.send(JSON.stringify(newMessage));
    }

    //This function updates the current user with the new user.
    updateUser = (str) => {
        const newUser = { name: str }

        this.setState({ currentUser: newUser });

        // this.socket.send(JSON.stringify(currentUser));
    }

    render() {
        return (
            <div>
      <NavBar />
      <MessageList messages = {this.state.messages}/>
      <ChatBar currentUser = {this.state.currentUser} submitChat = {this.submitFunc} updateUser = {this.updateUser}/>
      </div>
        );

    }
}
export default App;