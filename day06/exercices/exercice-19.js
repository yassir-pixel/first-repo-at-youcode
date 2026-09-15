/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * REGROUPEMENT (GROUP BY)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau [{nom: "A", groupe: 1}, {nom: "B", groupe: 2}, {nom: "C", groupe: 1}]. Créez une fonction qui retourne un objet regroupant ces données : { 1: [{nom: "A"}, {nom: "C"}], 2: [{nom: "B"}] }.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day06/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let tab = [
    {
        nom: "A",
        groupe: 1
    },
    {
        nom: "B",
        groupe: 2
    },
    {
        nom: "C",
        groupe: 1
    }
]

function arrangerTableau(tab){
    let retVal = {}

    for (let i = 0; i < tab.length; i++) {
        let objectGroupe = tab[i].groupe

        if(!retVal[tab[i].groupe])
            retVal[tab[i].groupe] = []
        retVal[tab[i].groupe].push({nom: tab[i].nom})
    }

    return retVal;
}


let tabArranger = arrangerTableau(tab)

console.log(tabArranger) // wierd