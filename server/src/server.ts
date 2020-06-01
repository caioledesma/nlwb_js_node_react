import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de users');

    //ele sempre retorna pro front no formato JSON, pra isso precisamos trocar o json na função abaixo

    //response.console.log()

    response.json([
        'Caio',
        'Diego',
        'Robson',
        'Thor',
        'Hugo feioso'
    ]);
});

app.listen(3333);
