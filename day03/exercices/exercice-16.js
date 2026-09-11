/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CLOSURE (FERMETURE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction creerCompteur(). À l'intérieur, déclarez let count = 0. Retournez une fonction qui, lorsqu'elle est appelée, fait count++ et retourne count. Stockez le résultat de creerCompteur() dans une variable monCompteur, et appelez-la 3 fois. Comprenez pourquoi l'état est conservé !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day03/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

const increment = count => {
    console.log(`valeur de count ${count} avant l'incrementation`)
    count++;
    console.log(`valeur de count ${count} aprés l'incrementation`)
    return count;
}
const creerCompteur = () => {
    let count = 0;    
    return increment(count);
}

let monCompteur = creerCompteur();

console.log(`valuer de monCompteur aprés premier appel : ${monCompteur}`)
monCompteur = creerCompteur()
console.log(`valuer de monCompteur aprés deuxieme appel : ${monCompteur}`)
monCompteur = creerCompteur()
console.log(`valuer de monCompteur aprés troisième appel : ${monCompteur}`)