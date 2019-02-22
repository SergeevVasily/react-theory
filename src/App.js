import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'
import Counter from './Counter/Counter'


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            cars: [
                {name: 'Ford', year:2018},
                {name: 'Audi', year:2016},
                {name: 'Tesla S', year:2013},
            ],
            pageTitle: 'React Comp',
            showCars: false
        }
    }

  onChangeName= (name, index) =>{
      const car = this.state.cars[index];
      car.name = name;
        const cars = [...this.state.cars];
      cars.index = car;
      this.setState({cars})
  };

     toggleCarsHandler = () =>{                                    // hide show cars method
         this.setState({
          showCars: !this.state.showCars
        })
      };

      deleteHandler(index){
          const cars = this.state.cars.concat();
          cars.splice(index, 1);

          this.setState({cars})

      }

      componentWillMount() {
        console.log("Component will mount")
      }

      componentDidMount() {
        console.log("Component did mount")
      }

    // changeTitleHandler = pageTitle =>{
      //     this.setState({pageTitle})
      // }*/

  render(){
    console.log(' App render');
    const divStyle ={
      textAlign:'center',                                       //its all about style bto
      'color':'blue',
      'background':'black'
    };

    let cars = null;

    if (this.state.showCars){
            cars = this.state.cars.map((car,index)=>{            //toggle cars
                return(
                    <ErrorBoundry key={index}>
                    <Car
                        name={car.name}
                        year={car.year}
                        onDelete={this.deleteHandler.bind(this, index)}
                        onChangeName={ event => this.onChangeName(event.target.value, index)}
                    />
                    </ErrorBoundry>
                )
            })
    }

    return (
      <div style={divStyle}>

       {/*<h1>{this.state.pageTitle}</h1>*/}
          <h1>{this.props.title}</h1>
          <Counter/>
          <hr/>
        <button onClick={this.toggleCarsHandler} style={{marginTop: 20}}>Toggle Cars</button>
          <div style={{
              width: 400,
              margin: 'auto',
              paddingTop: '20px',
              paddingBottom:'20px',
              marginTop: '20px'
          }}>
              { cars }
          </div>{/*toggle method */}
      </div>
    );
  }
}

export default App;