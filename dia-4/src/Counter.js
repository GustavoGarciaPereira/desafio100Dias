import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            Counter: props.initialCounter
        }

    }
    render(){
        const textStyle = {
            color: this.props.color
        }

        return(
            <div>
                <button onClick={()=>this.setState({Counter:this.state.Counter - 1})}>-</button>
                <span style={textStyle}> {this.props.nome} {this.state.Counter}</span>
                <button onClick={()=>this.setState({Counter:this.state.Counter + 1})}>+</button>
            </div>
        );
        
    }
}

export default Counter