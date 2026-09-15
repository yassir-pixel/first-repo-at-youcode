/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 04 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * VÉRIFICATION D'EXISTENCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction possedePropriete(obj, cle) qui retourne true si la clé existe dans l'objet, sinon false. *(Indice : vous pouvez utiliser l'opérateur in ou vérifier si c'est !== undefined)*.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-04
 * ▶️ Commande : node day06/exercices/exercice-04.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let utilisateur = {
    nom : "Yassir",
    age : "32",
    estAdmin : true,
    email : "yassir.taous42@gmail.com"
}

function possedePropriete(obj, cle) {
    for (let unit in obj) {
        if (unit == cle) {
            return true
        }
    }
    return false
}

let varKey = "nom";
let varKey2 = "adress";

console.log(possedePropriete(utilisateur, varKey));
console.log(possedePropriete(utilisateur, varKey2));