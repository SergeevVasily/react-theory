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

  render() {
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

        <button onClick={this.changeTitleHandler.bind(this, 'Changed!') }>Change Title</button>
        
        { this.state.cars.map((car)=>{
          return(
              <Car
                name={car.name}
                year={car.year}
                onChangeTitle={() => this.changeTitleHandler(car.name)}
              />
          )
        }) }


        {/*<Car*/}
            {/*name={cars[0].name}*/}
            {/*year={cars[0].year}*/}
            {/*onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}*/}
        {/*/>*/}
        {/*<Car*/}
            {/*name={cars[1].name}*/}
            {/*year={cars[1].year}*/}
            {/*onChangeTitle={()=> this.changeTitleHandler(cars[1].name)}*/}
        {/*/>*/}
        {/*<Car*/}
            {/*name={cars[2].name}*/}
            {/*year={cars[2].year}*/}
            {/*onChangeTitle={()=> this.changeTitleHandler(cars[2].name)}*/}
        {/*/>*/}
      </div>
    );
  }
}

export default App;
