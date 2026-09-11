/**
 * JOUR 05 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.

const notes = [12, 15, 8, 19];
let nbElements = notes.length
let sum = 0;
let moyenne = 0

for (let note in notes) {
    sum += notes[note]
}

moyenne = sum / nbElements
console.log(moyenne)


