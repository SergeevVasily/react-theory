import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year:2018},
      {name: 'Ford', year:2018},
      {name: 'Audi', year:2016},
      {name: 'Tesla S', year:2013},
    ],
    pageTitle: 'React Comp'
  }

  changeTitleHandler = (newTitle) =>{
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput =(event) =>{
    this.setState({
      pageTitle: event.target.value
    })
  }

  render(){
    console.log('render')
    const divStyle ={
      textAlign:'center',
      'color':'red',
      'background':'navy'
    }

    return (
      <div style={divStyle}>
       <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handleInput}/>
        <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change Title</button>
        { this.state.cars.map((car)=>{
          return(
              <Car
                name={car.name}
                year={car.year}
                onChangeTitle={ () => this.changeTitleHandler(car.name)}
              />
          )
        }) }

      </div>
    );
  }
}

export default App;