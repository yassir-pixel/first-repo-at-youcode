/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day06/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


let obj1 = {
    name: "Yassir",
    infos: {
        ville: "Casablanca",
        age: "32"
    }
}

let clonedObj = {...obj1};
console.log("Modify only nested objects and not top level keys\n")
clonedObj.infos.role = "DevOps"
clonedObj.anotherKey = 42
console.log(clonedObj);
console.log("\nobj1 apres modification depuis l'objet cloner 'clonedObj'")
console.log(obj1);

console.log("-----------------------------------------------------------")

clonedObj = obj1
console.log("Modify nested objects and top level keys\n")
clonedObj.anotherKey = 42
console.log(clonedObj);
console.log("\nobj1 apres modification depuis l'objet cloner 'clonedObj'")
console.log(obj1);


console.log("-----------------------------------------------------------")
clonedObj = structuredClone(obj1);
console.log("Does not modify the original object copied from\n")
clonedObj.infos.role = "DevSecOps"
clonedObj.anotherKey = 55

console.log(clonedObj);
console.log("\nobj1 apres modification depuis l'objet cloner 'clonedObj'")
console.log(obj1);