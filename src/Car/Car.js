import React from 'react';
import './Car.css'
import Radium from 'radium'



class Car extends React.Component{

componentWillReceiveProps(nextProps, nextContext) {
    console.log('Car component Will Receive Props', nextProps)
}

shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Car should component update', nextProps, nextState)
}

componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('Car component did update')
}

componentDidUpdate(prevProps, prevState, snapshot) {
}

    render() {
    const inputClasses = ['input'];
    if (props.name !== ''){
        inputClasses.push('green')
    }else{
        inputClasses.push('red')
    }
    if (props.name.length > 4){
        inputClasses.push('bold')
    }

    const style ={
        border: '1px solid navy',
        boxShadow: '0 4px 5px 0 rgba(99, 0 , 99, .99)',
        ':hover': {
            border: '1px solid purple',
            boxShadow: '0 4px 15px 0 rgba(0, 0 , 99, .77)',
            cursor: 'pointer'
        }
    };

    return (
        <div className="Car" style={style}>
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={props.onDelete}>Delete</button>
            {/*<button onClick={props.onChangeTitle}>Click</button>*/}
        </div>
    )
    }

export  default component Radium(Car);
