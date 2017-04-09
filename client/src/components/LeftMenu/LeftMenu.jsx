import React from 'react';
import MainMenu from '../MainMenu/MainMenu.jsx';
import ConvoSearch from '../ConvoSearch/ConvoSearch.jsx';
import { Button } from 'semantic-ui-react';
import RecentConversations from '../RecentConversations/RecentConversations.jsx';


const me = 'https://avatars2.githubusercontent.com/u/18074417?v=3&s=460';

class LeftMenu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    <div className="LeftMenu">
      <MainMenu 
        avatar={me}/>
      <ConvoSearch />
      <RecentConversations />
      <Button
          onClick={this.props.fetchDerp}
          negative
          circular
          compact>
          Fire!
      </Button>

    </div>
    )
  }

}

export default LeftMenu;