import React from 'react';


class Chatbot extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      input: ''
    };
  }

  addMessage(message) {
    this.setState({
      messages: [...this.state.messages, message]
    });
  }
  
  handleChange(event) {
    this.setState({input: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    let input = this.state.input;
    this.addMessage('You: ' + input);
    if (input === 'hello') {
      this.addMessage('Chatbot: Hey there!!');
    } else if (input === 'how are you?') {
      this.addMessage('Chatbot: I am doing great, thanks for asking!');
    }else if (input === 'How do I pay after booking a Hall?') {
      this.addMessage('Chatbot: Skievent will send a notification via SMS or your registered email. Queries related to Payment will be attended via email only.');

    }else if (input === 'How to book a hall on Skievent for Birthday?') {
      this.addMessage('Chatbot: Go to Homepage and then look for Birthday Celebration. Click on the link and you will be redirected to Birthday Celebration Halls Page. Now you can book a hall for Birthday ');
    }
    else {
      this.addMessage('Chatbot: I don\'t understand what you\'re saying');
    }
    this.setState({input: ''});
  }
  
  render() {
    return (
      <div>
        <h2 id="chat">Chatbot</h2>
        <div id="cen">
        {this.state.messages.map(message => <p>{message}</p>)}
        <form onSubmit={(event) => this.handleSubmit(event)} id="chatbot">
          <input type="text" value={this.state.input} onChange={(event) => this.handleChange(event)} />
          <input type="submit" value="Submit"  id="chatsubmit"/>
        </form>
        </div>
      </div>
    );
  }
}

export default Chatbot;