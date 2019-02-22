import React from 'react';
import './Car.css'
//import Radium from 'radium'



class Car extends React.Component {
componentWillReceiveProps(nextProps){

    console.log('Car ComponentWillReceiveProps', nextProps)
}
shouldComponentUpdate(nextProps, nextState){
    console.log(' Car shouldComponentUpdate', nextProps, nextState)
    return nextProps.name.trim() !== this.props.name.trim()
}

static getDerivedStateFromProps(nextProps, prevState){
 console.log('Car getDerivedStateFromProps', nextProps, prevState)

    return prevState
}

componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('Car componentWillUpdate', nextProps, nextState, nextContext)
}
componentDidUpdate(){
    console.log('Car componentDidUpdate')
}

getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
}

    componentWillUnmount() {
    console.log('Car ComponentWillUnmount')
}


    render() {
    console.log('Car render')
        const inputClasses = ['input'];
        if (this.props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }
        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        const style = {
            border: '1px solid navy',
            boxShadow: '0 4px 5px 0 rgba(99, 0 , 99, .99)',
            ':hover': {
                border: '1px solid purple',
                boxShadow: '0 4px 15px 0 rgba(0, 0 , 99, .77)',
                cursor: 'pointer'
            }
        }

        return(
        <div className="Car" style={style}>
            <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
    <input
        type="text"
        onChange={this.props.onChangeName}
        value={this.props.name}
        className={inputClasses.join(' ')}
    />
        <button onClick={this.props.onDelete}>Delete</button>
            {/*<button onClick={props.onChangeTitle}>Click</button>*/}
        </div>
        )
    }
}

export default Car
