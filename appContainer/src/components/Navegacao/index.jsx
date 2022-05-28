import React, { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

const ListarClientesApp = React.lazy(() => import('listar/ListarClientesApp'));
const CadastrarClienteApp = React.lazy(() => import('cadastrar/CadastrarClienteApp'));
const BuscarClientePorIdApp = React.lazy(() => import('buscar/BuscarClientePorIdApp'));

export function Navegacao(){
    const navegacao = useNavigate();

    return(
        <Routes>
            <Route path="/" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <ListarClientesApp navegar={navegacao} />
                </Suspense>
            }/>
            <Route path="/cadastrar" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <CadastrarClienteApp navegar={navegacao}/>
                </Suspense>
            }/>
            <Route path="/buscar/:id" element={
                <Suspense fallback={<div>Carregando...</div>}>
                    <BuscarClientePorIdApp navegar={navegacao}/>
                </Suspense>
            }/>
        </Routes>
    );
}