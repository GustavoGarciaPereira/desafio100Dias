import React, {Component} from 'react';

class Counter extends Component{

    render(){
        const textStyle = {
            color: this.props.color
        }

        return(
            <h1 style={textStyle}> {this.props.nome} {this.props.initialCounter}</h1>
        );
        
    }
}

export default Counter