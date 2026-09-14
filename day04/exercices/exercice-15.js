/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day04/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let mot1 = "chien";
let mot2 = "niche"

function isAnagramme (mot1, mot2) {
    if (mot1.length != mot2.length) {
        console.log(`"${mot1}" est "${mot2}" ne sont pas des Anagrame"`);
        return -1
    }
    for (let i = 0; i < mot1.length; i++) {
        if (mot2.indexOf(mot1[i]) == -1) {
            console.log(`"${mot1}" est "${mot2}" ne sont pas des Anagrame"`);
            return -1
        } else
            continue
    }
    console.log(`"${mot1}" est "${mot2}" sont des Anagrame"`)
    return 0
}

isAnagramme("chien", "niche");
isAnagramme("chien", "nicxe");
isAnagramme("chien", "nicheV");