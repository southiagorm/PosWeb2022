import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CadastrarCliente } from "../CadastrarCliente";
import { ListarClientes } from "../ListarClientes";

export function Navegacao(){
    return(
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarClientes />
                </Suspense>
            }/>
            <Route path="/cadastrar" element={
                <CadastrarCliente />
            }/>
        </Routes>
    );
}