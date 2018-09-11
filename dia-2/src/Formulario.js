import React, {Component} from 'react';

export default class extends Component {
    constructor(){
        super();
        this.state = {
            valorDoBotao: "Enviar Formulário"
        };
    };
    _mudarValorDoBotao(){
        this.setState({
            valorDoBotao: "Não enviar Formulário"
        });
    };
    render(){
        console.log(this.props);
        return (
            <form>
                <input type ="text" placeholder={this.props.placehoderDoInput}/>
                <button onMouseOver={()=>this._mudarValorDoBotao()}>{this.state.valorDoBotao} </button>
            </form>
        );  
    };
};