import React from 'react';

import ChatInput from '../ChatInput/ChatInput.jsx';

class ActiveChat extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    <div className="ActiveChat">
      ActiveChat
      <ChatInput />
    </div>
    )
  }

  
}

export default ActiveChat;