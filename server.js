import express from "express";

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
    response
        .type('html')
        .send('<h1>Server del mio blog</h1>')
})

app.get('/bacheca', (request, response) => {
    
    response
        .type('json')
        .send(
            [{
                "id": 1,
                "titolo": "Lautaro Martínez: Il Capitano Nerazzurro",
                "contenuto": "Analisi dettagliata sulla crescita del Toro, diventato leader assoluto e trascinatore dell'attacco interista.",
                "immagine": "/lautaro.webp",
                "tags": ["lautaro", "attaccanti", "capitano", "inter"]
            },
            {
                "id": 2,
                "titolo": "La Geometria del Centrocampo di Nicolò Barella",
                "contenuto": "Focus sulle prestazioni del centrocampista sardo, tra recuperi difensivi, inserimenti e assist decisivi.",
                "immagine": "/bare.webp",
                "tags": ["barella", "centrocampo", "serie-a", "italia"]
            },
            {
                "id": 3,
                "titolo": "I Segreti della Difesa di Alessandro Bastoni",
                "contenuto": "Come il braccetto sinistro nerazzurro unisce una solida fase difensiva a una straordinaria qualità nell'impostazione di gioco.",
                "immagine": "/basto.webp",
                "tags": ["bastoni", "difesa", "tattica", "inter"]
            },
            {
                "id": 4,
                "titolo": "Federico Dimarco: Mancino Puro e Cuore Interista",
                "contenuto": "La storia del laterale sinistro cresciuto nella curva nerazzurra, oggi diventato uno dei migliori esterni d'Europa per cross e corsa.",
                "immagine": "/dimash.webp",
                "tags": ["dimarco", "esterno", "mancino", "interismo"]
            },
            {
                "id": 5,
                "titolo": "Calhanoglu e la Perfezione dal Dischetto",
                "contenuto": "Statistiche e segreti del centrocampista turco, diventato uno dei rigoristi più infallibili d'Europa.",
                "immagine": "/chala.webp",
                "tags": ["calhanoglu", "rigori", "statistiche", "centrocampo"]
            }
            ])
})

app.listen(3000, (error) => {
    if (error) {
        console.error('Il server ha riscontrato un problema');
    } else {
        console.log('Server in ascolto porta 3000');
    }
});

