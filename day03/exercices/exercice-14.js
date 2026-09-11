/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CALCULATRICE MODULAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction calculatrice(a, b, signe). Utilisez un switch sur signe pour appeler l'une des 4 opérations de base (+, -, *, /) que vous aurez écrites en tant que fonctions distinctes.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day03/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

const addition = (a, b) => a + b;
const multiplication = (a, b) => a * b;
const substraction = (a, b) => a - b;
const division = (a, b) => a / b;

const calculatrice = (a, b, signe) => {
    let resultat = 0;
    switch (signe) {
        case "-":
            resultat = substraction(a, b)
            break;
        case "+":
            resultat = addition(a, b)
            break;
        case "*":
            resultat = multiplication(a, b)
            break;
        case "/":
            resultat = division(a, b)
            break;
        default:
            console.log("vous devez selectionner une opration valide")
    }
    return resultat;
}

console.log(calculatrice(4, 3, "+"))
console.log(calculatrice(4, 3, '-'))
console.log(calculatrice(4, 3, '*'))
console.log(calculatrice(4, 3, '/'))

