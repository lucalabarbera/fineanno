import { Post } from './post';

export const Posts: Post[] = [
  { nome:'DUCATI SUPERSPORT',
    tipo:'sportiva',
    prezzo:7500,
    descrizione:'Ducati supersport 5.000 km ',
    nomeUtente:'Luca',
    cognomeUtente:'Laba',
    username:'luca.laba',
    data:'18:18, il 18/02/2018',
    commenti:[
      {
        testo:'Ha lo scarico originale?',
        cognomeUtente: 'Novembre',
        nomeUtente:'Valerossi',
        username:'VR',
        data: '23:15, il 24/02/2018'
      },
      {
        testo:'No :(',
        cognomeUtente: 'Laba',
        nomeUtente:'LucaLaba',
        username:'luca.laba',
        data: '21:54, il 24/04/2019'
      }]
  },
  { nome:'Bicicletta X40',
    tipo:'veicolo',
    prezzo:125,
    descrizione:'Bicicletta Vintage',
    nomeUtente:'Camilla',
    cognomeUtente:'Paglia',
    username:'cpaglia',
    data:'21:37, il 27/04/2019',
    commenti:[
      { testo:'La prendo solo se è stata usata meno di 24 giorni e 22 ore',
        cognomeUtente: 'Novembre',
        nomeUtente:'Mario',
        username:'marion',
        data: '15:07, il 29/04/2019'
      }]
  }
];
