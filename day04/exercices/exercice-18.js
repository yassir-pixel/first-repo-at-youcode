/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day04/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function compterOccurence(phrase, char) {
    let retValue = 0;
    let unifiedPhrase = phrase.toLowerCase();

    for (let i = 0; i < phrase.length; i++) {
        if (unifiedPhrase[i] == char)
            retValue += 1;
        else
            continue;
    }
    return retValue;
}

let phrase = "ceci est une PHrase example pour definir le nombre de caractere 'e'!";

console.log(compterOccurence(phrase, 'e'))