/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * NETTOYAGE DE SCRAPING AVEC DES OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez scrappé une liste de prix : [{ article: "PC", prix: "1500$" }, { article: "Souris", prix: "25$" }]. Écrivez une fonction qui modifie les objets pour que le prix devienne un vrai Number (enlever le "$").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day06/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


function getRealPrice(obj){
    for (let item in obj) {
        obj[item].prix = Number((obj[item].prix).slice(0, obj[item].prix.indexOf('$')))
        // let price = obj[item].prix;
        // let index = (obj[item].prix).indexOf('$');
        // price = (obj[item].prix).slice(0, index);
        // obj[item].prix = Number(price)
    }
}

let data = [
    { article: "PC", prix: "1500$" }, 
    { article: "Souris", prix: "25$" }
]

getRealPrice(data)

console.log(data)