import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: { name: "Anonymous" }, // optional. if currentUser is not defined, it means the user is Anonymous
            messages: [{
                    username: "Anonymous",
                    content: "Has anyone seen my marbles?",
                    id: 1
                },
                {
                    username: "Anonymous1",
                    content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
                    id: 2
                }
            ]
        }

      this.submitFunc = this.submitFunc.bind(this);

    }


    submitFunc(str) {
    const newMessage = {
            username: "Anonymous3",
            content: str,
            id: Math.random()
          }

    const oldMessages = this.state.messages;
    const newMessages = [...oldMessages, newMessage];
    this.setState({ messages:newMessages });
  }

    // in App.jsx
    componentDidMount() {
        console.log("componentDidMount <App />");
        setTimeout(() => {
            console.log("Simulating incoming message");
            // Add a new message to the list of messages in the data store
            const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
            const messages = this.state.messages.concat(newMessage)
            // Update the state of the app component.
            // Calling setState will trigger a call to render() in App and all child components.
            this.setState({ messages: messages })
        }, 3000);
    }

    render() {

        return (
            <div>
      <NavBar />
      <MessageList messages = {this.state.messages}/>
      <ChatBar currentUser = {this.state.currentUser} submitFunc = {this.submitFunc}/>
      </div>
        );



    }



}
export default App;