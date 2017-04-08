import React from 'react';
import { Image, Icon } from 'semantic-ui-react';

const ActiveChatHeader = (props) => {

  return (
    <div className="active-chat-header">
      <Image
        shape='circular'
        src={props.avatar}
      />
      <div className="contact-name">
        NAME!!
      </div>
      <div className="buttons">
        <Icon 
        name="microphone"
        size="big" />
        <Icon 
        name="microphone"
        size="big" />
        <Icon 
        name="microphone"
        size="big" />
        
      </div>
      

    </div>
  )
}


export default ActiveChatHeader;