/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE DÉTECTEUR DE PALINDROME (LOGIQUE DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction estPalindrome(mot) (vous pouvez ignorer les majuscules et espaces pour l'instant) qui retourne true si le mot se lit dans les deux sens (ex: "radar").
 * Indice : vous pouvez utiliser une boucle for à l'envers ou comparer les indices.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day03/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

const estPalindrome = mot => {
    let isPalindrome = true;
    for (let i = 0, j = mot.length - 1; i < (mot.length / 2) && j > (mot.length / 2); i++,j--) {
        if (mot[i] !== mot[j]) {
            isPalindrome = false
            break;
        }
    }
    return isPalindrome;
}

console.log(estPalindrome("mot"))
console.log(estPalindrome("radar"))
console.log(estPalindrome("taddat"))
console.log(estPalindrome("tt"))
console.log(estPalindrome("Y"))