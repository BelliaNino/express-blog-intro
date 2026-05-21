import express from "express";

const app = express();



app.get('/', (request, response) => {
    response
         .type('html')
        .send('<h1>Server del mio blog</h1>')
})

app.listen(3000, (error) => {
    if (error) {
        console.error('Il server ha riscontrato un problema');
    } else {
        console.log('Server in ascolto porta 3000');
    }
});