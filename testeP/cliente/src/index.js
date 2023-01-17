import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import OlaMundoFuncao from './componentes/OlaMundo';
import OlaMundoClasse from './componentes/OlaMundoClasse';

import Form from './componentes/Form';
import NovaTarefa from './componentes/NovaTarefaClass';
import ChangeBtnBgColor from './componentes/changeBtnBgColor';
import GeradorDeGrid from './componentes/GeradorDeGrid'
import ShowImg from './componentes/showImg';

import Exercicio23 from './componentes/Exercicio23';
import Rota from './componentes/Rota';
import Exercicio12 from './componentes/Exercicio12';
import Exercicio12Classe from './componentes/Exercicio12Classe';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rota />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
