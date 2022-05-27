import React from "react";
import { Container } from "reactstrap";
import { ListarClientes } from "../ListarClientes";
import { NavBar } from "../NavBar";

export function App(){
    return(
        <Container>
            <NavBar />
            <ListarClientes />
        </Container>
    );
}