/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * MAXIMUM DE TROIS NOMBRES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Sans utiliser Math.max(), écrivez une fonction trouverMax(a, b, c) qui retourne le plus grand des trois nombres en utilisant des conditions if/else.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day03/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

const trouverMax = (a, b, c) => {
    let valeurMax;

    if (a > b) {
        if (a >= c)
            valeurMax = a;
        else
            valeurMax = c;
    } else {
        if (a == b) {
            if (a >= c)
                valeurMax = a;
            else
                valeurMax = c;
        }
        if (b >= c)
            valeurMax = b;
        else
            valeurMax = c;
    }
    return valeurMax;
}


console.log(`la valeur Max est : ${trouverMax(1, 3, 6)}`)
console.log(`la valeur Max est : ${trouverMax(3, 3, 1)}`)
console.log(`la valeur Max est : ${trouverMax(-1, 3, 6)}`)
console.log(`la valeur Max est : ${trouverMax(-5, -3, -6)}`)
