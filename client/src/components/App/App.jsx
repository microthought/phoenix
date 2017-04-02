import React, { Component } from 'react';
import axios from 'axios';

import LeftMenu from '../LeftMenu/LeftMenu.jsx';
import ActiveChat from '../ActiveChat/ActiveChat.jsx';



class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      messages: []
    };
  }


  render() {
    return(
      <div className="app">
        <LeftMenu fetchDerp={()=>this.fetchDummyMessages()}/>
        <ActiveChat 
          messages={this.state.messages}/>
      </div>
    );
  }



  fetchDummyMessages (){
    console.log("getting messages");
    axios.get('http://localhost:3000/conversation/dummy')
    .then(res => {
      this.setState({messages: res.data});
      console.log("state:", this.state);
    })
    .catch(fail => console.log("fail ", fail));
  }

  fetchDerp (){
    console.log("fire the request canon!");
    axios.get('http://localhost:3000/target')
    .then(res => console.log("   Return Volley: ", res.data))
    .catch(fail => console.log("fail ", fail));
  }
}

export default App;