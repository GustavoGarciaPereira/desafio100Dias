import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);

        this.handleDecrementeClick = this.handleDecrementeClick.bind(this);
        this.handleIncrementeClick = this.handleIncrementeClick.bind(this);

        this.state = {
            Counter: props.initialCounter
        }
    }
    handleDecrementeClick(){
        this.setState({Counter:this.state.Counter - 1})
    }
    handleIncrementeClick(){
        this.setState({Counter:this.state.Counter + 1})
    }
    render(){
        const textStyle = {
            color: this.props.color
        }
        return(
            <div>
                <button onClick={this.handleDecrementeClick}>-</button>
                <span style={textStyle}> {this.props.nome} {this.state.Counter}</span>
                <button onClick={this.handleIncrementeClick}>+</button>
            </div>
        );        
    }
}

export default Counter