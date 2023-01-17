import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Form from './Form';
import Gerador from './GeradorDeGrid';
import ChangeBtnBgColor from "./changeBtnBgColor";
import Menu from "./Menu";
import Exercicio12Classe from "./Exercicio12Classe";
import Exercicio11 from "./Exercicio11";


class Rota extends React.Component {
    constructor(props) {
        super(props)
        this.teste = 'teste';
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Menu />} />
                        <Route path='/ola' element={<Form />} />
                        <Route path='/gerador' element={<Gerador linhas={3} colunas={4} />} />
                        <Route path='/btn' element={<ChangeBtnBgColor />} />
                        <Route path='exercicio11' element={<Exercicio11 />} />
                        <Route path='exercicio12' element={<Exercicio12Classe />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default Rota