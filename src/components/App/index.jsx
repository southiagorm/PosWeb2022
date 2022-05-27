import React from "react";
import { Container } from "reactstrap";
import { CadastrarCliente } from "../CadastrarCliente";
import { ListarClientes } from "../ListarClientes";
import { NavBar } from "../NavBar";
import { Navegacao } from "../Navegacao";

export function App(){
    return(
        <Container>
            <NavBar />
            <Navegacao />
        </Container>
    );
}