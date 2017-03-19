import React from 'react';

class ChatInput extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="chat-input">
        <button>Send</button>
        <input
        type="text"
        placeholder="type message here"/>
      </div>
    )
  }
}


export default ChatInput;