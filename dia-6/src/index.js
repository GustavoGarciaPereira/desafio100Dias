import ReactDOM from 'react-dom';
import React, {Component} from 'react';

class Input extends Component{
    constructor(){
        super();
        this.state = {
            nome:""
        }
        this.onChange = (ev) => {
            this.setState({nome:ev.target.value});
        };
    }

    render(){
        return (
            <div>
                Nome: <input name = "nome" 
                value = {this.state.nome}
                onChange = {this.onChange} 
                type = "text"/>
                
                <br/>Nome informado {this.state.nome}!
            </div>
        );
    }
}



ReactDOM.render(<Input />,document.getElementById('root'));