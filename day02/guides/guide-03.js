/**
 * JOUR 02 — GUIDE 03
 * Les boucles imbriquées (Grille)
 *
 * OBJECTIF
 * Affichez un carré de 3 lignes et 3 colonnes rempli d'étoiles *.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.

for (let i = 0; i < 3; i++) { 
    let ligne = "";
    for (let j = 0; j < 3; j++) {
        ligne += "*";
    }
    console.log(ligne);
}