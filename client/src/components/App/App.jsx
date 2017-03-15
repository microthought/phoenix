import React, { Component } from "react";
import axios from 'axios';

import LeftMenu from '../LeftMenu/LeftMenu.jsx';
import ActiveChat from '../ActiveChat/ActiveChat.jsx';



class App extends React.Component {
  constructor (props){
    super(props);

  }


  render() {
    return(
      <div className="app"> Good day mate!
        <LeftMenu />
        <ActiveChat />
        <button
          onClick={this.fetchDerp}
          className="primary">
          Fire!
        </button>
      </div>
    );
  }





  fetchDerp (){
    console.log("fire the request canon!");
    axios.get('http://localhost:3000/target')
    .then(res => console.log("   Return Volley: ", res.data))
    .catch(fail => console.log("fail ", fail));
  }
}

export default App;