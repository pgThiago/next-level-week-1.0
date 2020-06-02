import express, { request, response } from 'express';

const app = express();

app.get('/users', (request, response) => {

    response.json( [
        'Diego',
        'Thiago',
        'Mayk Brito na área',
        'Depois do npm install ts-node-dev -D'
    ] );

});

app.listen(3333);

