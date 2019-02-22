import React from 'react'

export  default  class ErrorBoundry  extends React.Component{

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError){
            return <h1 style={{color: 'red'}}>Something Happened</h1>
        }
        return this.props.children
    }

}