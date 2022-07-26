import read from 'readline-sync';

import { comparer, genererJustePrix, peutJouer } from "./justePrix";

let nombreVie = 10;

// let justePrix = genererJustePrix(1000);
let justePrix =  500;

while (peutJouer(nombreVie)){
    const nombreJoueur = read.questionInt(`Quel est le juste prix (${nombreVie} vie(s) restante)`);
    const message = comparer(nombreJoueur, justePrix);
    console.log(message);
    if(message === 'C\'est gagné !')
        break;
    nombreVie--;
}
