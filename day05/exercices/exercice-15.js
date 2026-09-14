/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function fusionnerTableaux(tab, tab2) {
    let tableauUnifier = [];
    let i = 0;
    let j = 0;

    while (i < tab.length && j < tab2.length) {
        if (tab[i] < tab2[j]) {
            tableauUnifier.push(tab[i]);
            i++;
        } else {
            tableauUnifier.push(tab2[j]);
            j++;
        }
    }

    for (; i < tab.length; i++) {
        tableauUnifier.push(tab[i]);
    }
    for (; j < tab2.length; j++) {
        tableauUnifier.push(tab2[j]);
    }
    return tableauUnifier;
}


let tab = [1, 3, 5, 12, 20];
let tab2 = [2, 4, 6, 8 , 19, 21];

console.log(fusionnerTableaux(tab, tab2));