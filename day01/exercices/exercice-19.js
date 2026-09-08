/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * ÉVALUATION BOOLÉENNE COMPLEXE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez : hasAccount = false, isGuest = true, cartValue = 150, isBanned = false.
 * Un utilisateur peut valider sa commande s'il n'est pas banni, ET (il a un compte OU il est invité avec un panier > 100). Évaluez cette règle.
 *
 * RÉSULTAT ATTENDU
 * Commande validée
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day01/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function isCommandeValidée(hasAccount, isGuest, cartValue, isBanned) {
    let decision;
    if (isBanned === true) {
        decision = "Commande non validée"
        return decision;
    } else {
        if (hasAccount === true || isGuest === true) {
            if (hasAccount === true) {
                decision = "Commande non validée"
                return decision
            } else if (isGuest === true && cartValue > 100) {
                decision = "Commande validée"
                return decision
            } else {
                decision = "Commande non validée"
                return decision
            }

        } else {
            decision = "Commande non validée"
            return decision
        }
    }
}

let hasAccount = false;
let isGuest = true;
let cartValue = 150;
let isBanned = false;

let decision = isCommandeValidée(hasAccount, isGuest, cartValue, isBanned);
console.log(`${decision}`)