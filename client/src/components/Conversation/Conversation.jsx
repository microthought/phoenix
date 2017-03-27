import React from 'react';
import {List, Image} from 'semantic-ui-react';

const Conversation  = ({avatar, displayName, lastMessageText}) => (
  <List.Item className="conversation">
    <Image
      shape='circular'
      src={avatar} />
    <List.Content>
      <List.Header className="truncate" content={displayName} />
      <List.Description className="truncate" content={lastMessageText} />
    </List.Content>
  </List.Item>
)


export default Conversation;