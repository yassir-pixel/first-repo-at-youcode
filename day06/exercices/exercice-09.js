/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let candidats = [
    {nom : "Yuri", score : 75},
    {nom : "Erin", score : 66},
    {nom : "Soraka", score : 18},
    {nom : "Lan", score : 9}
]

let getBestCandidats = (obj) => {
    let bestCandidats = [];

    for (let candidat in candidats) {
        if (candidats[candidat].score >= 10)
            bestCandidats.push(candidats[candidat]);
    }
    return bestCandidats
}

let bestCandidats = getBestCandidats(candidats);

console.log(bestCandidats)