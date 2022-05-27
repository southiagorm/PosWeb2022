import React from "react";
import ReactDom from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {App} from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createServer, Model } from "miragejs";

createServer({
    models:{
        cliente: Model,
    },

    seeds(server){
        server.db.loadData({
            clientes:[
                {
                    id: 1,
                    nome: 'João',
                    peso: 100,
                    altura: 1.90,
                    sexo: 'Masculino',
                    imc: 27.7
                },
                {
                    id: 2,
                    nome: 'Maria',
                    peso: 80,
                    altura: 1.60,
                    sexo: 'Feminino',
                    imc: 31.7
                },
            ]
        });
    },

    routes(){
        this.namespace = 'api',

        this.get('/clientes', ()=>{
            return this.schema.all('cliente');
        }),

        this.post('/clientes', (schema, request)=>{
            const data = JSON.parse(request.requestBody);
            return this.schema.create('cliente', data);
        });
    }
});

const root = ReactDom.createRoot(
    document.getElementById('root'),
);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);