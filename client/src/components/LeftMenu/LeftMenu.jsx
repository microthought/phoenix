import React from 'react';
import MainMenu from '../MainMenu/MainMenu.jsx';
import ConvoSearch from '../ConvoSearch/ConvoSearch.jsx';
import { Button } from 'semantic-ui-react';
import RecentConversations from '../RecentConversations/RecentConversations.jsx';




class LeftMenu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    <div className="LeftMenu">
      <MainMenu />
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