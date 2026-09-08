/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LA VALIDITÉ DU TRIANGLE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * En géométrie, un triangle est valide si la longueur de chaque côté est inférieure à la somme des deux autres. Déclarez 3 longueurs a = 3, b = 4, c = 5. Affichez si le triangle est valide ou non.
 *
 * RÉSULTAT ATTENDU
 * Triangle valide
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day01/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function isTriangleValide(a, b, c) {
    let decision;
    let coteC = a + b;
    let coteB = a + c;
    let coteA = b + c;

    if (a < coteA) {
        if (b < coteB) {
            if (c < coteC) {
                decision = "Triangle valide";
                return decision;
            }
        }
    }
    decision = "Triangle non valide"
    return decision
}

let a = 3;
let b = 4;
let c = 5;

let decision = isTriangleValide(a, b, c);
console.log(`${decision}`)