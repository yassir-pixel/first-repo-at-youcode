/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ÉGALITÉ STRICTE VS SOUPLE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Comparez la chaîne "10" et le nombre 10 d'abord avec == puis avec ===. Affichez les deux résultats et constatez la différence.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day01/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let string = "10"
let number = 10

console.log("comparaison faible : applique une convertion de type avant de faire la comparaison")
console.log(string == number)

console.log("comparaison stricte : L'égalité stricte compare deux valeurs et teste leur égalité. Aucune des valeurs n'est convertie implicitement en une autre valeur avant que la comparaison soit effectuée. Si les valeurs sont typées différemment, elles sont considérées comme différentes")
console.log(string === number)
