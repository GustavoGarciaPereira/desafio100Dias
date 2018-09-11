import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import Formulario from './Formulario';

class App extends Component{
    render(){
        return(
            <Formulario placehoderDoInput="Nome"/>
        );
    }
}



ReactDOM.render(<App/>, document.getElementById('root'));