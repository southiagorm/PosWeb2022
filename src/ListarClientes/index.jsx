import React from "react";
import { Table } from "reactstrap";

export function ListarClientes(){

    let pesos = [100, 80];
    let alturas = [1.90, 1.60]

    return(
        <Table striped bordered>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Peso</th>
                    <th scope="col">Altura</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>João</td>
                    <td>{pesos[0]}</td>
                    <td>{alturas[0]}</td>
                    <td>Masculino</td>
                    <td>{pesos[0]/Math.pow(alturas[0],2)}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maria</td>
                    <td>{pesos[1]}</td>
                    <td>{alturas[1]}</td>
                    <td>Masculino</td>
                    <td>{pesos[1]/Math.pow(alturas[0],2)}</td>
                </tr>
            </tbody>
        </Table>
    );
}