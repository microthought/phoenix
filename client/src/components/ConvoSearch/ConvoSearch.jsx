import React from 'react';
import { Input, Icon} from 'semantic-ui-react';

const ConvoSearch = () => {


  return (
    <div className="convo-search">

      <Icon 
        name="search"
        size="big" />
      <Input
        placeholder="pretend to search here"/>

    </div>
  )
}



export default ConvoSearch;