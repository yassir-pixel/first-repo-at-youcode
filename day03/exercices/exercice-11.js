/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FACTORIELLE ENCAPSULÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Convertissez votre logique de factorielle (Day 02) en une fonction calculerFactorielle(n). Si n = 0, la fonction doit retourner 1.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day03/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

const calculerFactorielle = n => {
    let factorielle = 1
    for (let i = n; i >= 1; i--) {
        factorielle = factorielle * i
    }
    return factorielle;
}

let valeur = calculerFactorielle(6)

console.log(valeur);
valeur = calculerFactorielle(0);
console.log(valeur);