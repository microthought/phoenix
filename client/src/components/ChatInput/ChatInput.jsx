import React from 'react';
import { Input, Icon} from 'semantic-ui-react';

class ChatInput extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="chat-input">
        <button>Send</button>
        <Icon 
        name="microphone"
        size="big" />
        <Input
        placeholder="type message here"/>
      </div>
    )
  }
}


export default ChatInput;