import React from 'react';

import ActiveChatHeader from "../ActiveChatHeader/ActiveChatHeader.jsx";
import ChatInput from '../ChatInput/ChatInput.jsx';
import ChatHistory from '../ChatHistory/ChatHistory.jsx';
import ChatMessage from '../ChatMessage/ChatMessage.jsx';

 const prettyAvatar = 'https://react.semantic-ui.com/assets/images/avatar/small/lindsay.png'

class ActiveChat extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    <div className="ActiveChat">
      <ActiveChatHeader 
        avatar={prettyAvatar}/>
      <ChatHistory 
        messages={this.props.messages}/>
      <ChatInput />
    </div>
    )
  }

  
}

export default ActiveChat;