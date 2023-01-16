import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Form from './Form';
import Gerador from './GeradorDeGrid';
import ChangeBtnBgColor from "./changeBtnBgColor";
import Menu from "./Menu";


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
                        <Route path="/" element={<Menu/>}/>
                        <Route path='/ola' element={<Form/>} />
                        <Route path='/gerador' element={<Gerador linhas={3} colunas={4}/>} />
                        <Route path='/btn' element={<ChangeBtnBgColor/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default Rota