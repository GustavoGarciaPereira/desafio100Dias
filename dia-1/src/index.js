import ReactDOM from 'react-dom';
import React, {Component} from 'react';



class App extends Component{
    constructor(){
        super();
        this.state={
            contador: 0
        }
    };
    _somarUm(){
         this.setState({
            contador: this.state.contador + 1 
         });
    }
    _subtraiUm(){
        this.setState({
           contador: this.state.contador - 1 
        });
   }
    render(){
        return (
            <div>
                <p> Sim um contador classico para começar hahah</p>
                <span>
                    
                    <button onClick={() => this._somarUm()}>Mais 1</button>
                    <p>contador esta com {this.state.contador}</p>
                    <button onClick={() => this._subtraiUm()}>Menos 1</button>    
                </span>
            </div>
        );
    };
};

ReactDOM.render(<App />,document.getElementById('root'));