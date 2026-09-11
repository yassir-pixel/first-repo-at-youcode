/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SCRAPING : EXTRACTION DE DONNÉES MIXTES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez "scrappé" une page mal codée et obtenu ce tableau : ["Prix", 15.5, null, "Quantite", 3, undefined, "Total", 46.5]. Écrivez une fonction qui filtre ce tableau pour ne garder QUE les nombres valides.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day05/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


function filtreTableau(arr){

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            arr.splice(i, 1);
            i -= 1;
        }
    }
}

const tableau = ["Prix", 15.5, null, "Quantite", 3, undefined, "Total", 46.5]

// for (let i = 0; i < tableau.length; i++)
//     console.log(typeof tableau[i])

console.log(tableau)
filtreTableau(tableau)
console.log(tableau)


