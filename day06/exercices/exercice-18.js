/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day06/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function sontIdentiaues(obj1, obj2) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
        return false
    }
    let obj1Keys = Object.keys(obj1)
    let obj2Keys = Object.keys(obj2)
    
    for (let i = 0; i < obj1Keys.length; i++) {
        if (obj1Keys[i] != obj2Keys[i])
            return false
    }
    let obj1Values = Object.values(obj1)
    let obj2Values = Object.values(obj2)
    for (let i = 0; i < obj1Values.length; i++) {
        if (obj1Values[i] != obj2Values[i])
            return false
    }
    return true
}

let obj1 = {
    key1: "value1",
    key2: "value2",
    key3: 4
    // key3: {
    //     subkey1: "sub-value1",
    //     subkey2: "sub-value2"
    // },
    // key4: [
    //     {key1: 10, key2: 20},
    //     {key1: 50, key2: 50}
    // ]
}

let obj2 = {
    key1: "value1",
    key2: "value2",
    key3: 4
    // key3: {
    //     subkey1: "sub-value1",
    //     subkey2: "sub-value2"
    // },
    // key4: [
    //     {key1: 10, key2: 20},
    //     {key1: 50, key2: 50}
    // ]
}

console.log(sontIdentiaues(obj1, obj2))
