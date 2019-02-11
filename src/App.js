import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const divStyle ={
      textAlign:'center',
      'color':'red',
      'background':'navy'
    }
    return (
      <div style={divStyle}>
       <h1>Hello World</h1>
      </div>

    );
  }
}

export default App;
