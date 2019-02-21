import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year:2018},
      {name: 'Audi', year:2016},
      {name: 'Tesla S', year:2013},
    ],
    pageTitle: 'React Comp',
      showCars: false
  }

  onChangeName= (name, index) =>{
      const car = this.state.cars[index]
      car.name = name;
        const cars = [...this.state.cars]
      cars.index = car
      this.setState({cars})
  }

     toggleCarsHandler = () =>{                                    // hide show cars method
         this.setState({
          showCars: !this.state.showCars
        })
      }

      deleteHandler(index){
          const cars = this.state.cars.concat()
          cars.splice(index, 1)

          this.setState({cars})

      }
      // changeTitleHandler = pageTitle =>{
      //     this.setState({pageTitle})
      // }*/

  render(){
    console.log('render')
    const divStyle ={
      textAlign:'center',                                       //its all about style bto
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
                        onDelete={this.deleteHandler.bind(this, index)}
                        onChangeName={ event => this.onChangeName(event.target.value, index)}
                    />
                )
            })
    }

    return (
      <div style={divStyle}>
       <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler}>Toggle Cars</button>
          <div style={{
              width: 400,
              margin: 'auto',
              paddingTop: '20px',
              paddingBottom:'20px'
          }}>
              { cars }
          </div>{/*toggle method */}
      </div>
    );
  }
}

export default App;