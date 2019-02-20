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
    pageTitle: 'React Comp',
      showCars: false
  }

  toggleCarsHandler = () =>{                       // hide / show cars method
    this.setState({
      showCars: !this.state.showCars
    })
  }

  changeTitleHandler = pageTitle =>{
      this.setState({pageTitle})
  }

  render(){
    console.log('render')
    const divStyle ={
      textAlign:'center',             //its all about style bto
      'color':'blue',
      'background':'black'
    }

    let cars = null;

    if (this.state.showCars){
            cars = this.state.cars.map((car,index)=>{            //toggle cars
                return(
                    <Car
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={ () => this.changeTitleHandler(car.name)}
                    />
                )
            })
    }

    return (
      <div style={divStyle}>
       <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler}>Toggle Cars</button>
        { cars }                                                            {/*toggle method */}
      </div>
    );
  }
}

export default App;