/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * JEU : PIERRE, PAPIER, CISEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez deux variables joueur1 = "Pierre" et joueur2 = "Ciseaux". En utilisant des conditions, déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).
 *
 * RÉSULTAT ATTENDU
 * Joueur 1 gagne !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day01/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function defineGagnant(joueur1, joueur2) {
    let decision;

    if (joueur1 === "Pierre") {
        if (joueur2 === "Pierre") {
            decision = "Egalité";
            return decision;
        } else if (joueur2 === "Papier") {
            decision = "Joueur2"
            return decision;
        } else if (joueur2 === "Ciseaux") {
            decision = "Joueur1";
            return decision;
        } else {
            decision = "Error"
            return decision
        }
    } else if (joueur1 === "Ciseaux") {
        if (joueur2 === "Pierre") {
            decision = "Joueur2"
            return decision
        } else if (joueur2 === "Papier") {
            decision = "Joueur1"
            return decision
        } else if (joueur2 === "Ciseaux") {
            decision = "Egalité";
            return decision;
        } else {
            decision = "Error"
            return decision
        }
    } else if (joueur1 === "Papier") {
        if (joueur2 === "Pierre") {
            decision = "Joueur1"
            return decision
        } else if (joueur2 === "Papier") {
            decision = "Egalité";
            return decision;
        } else if (joueur2 === "Ciseaux") {
            decision = "Joueur2"
            return decision
        } else {
            decision = "Error"
            return decision
        }
    } else {
        decision = "Error"
        return decision
    }
}

let joueur1 = "Pierre";
let joueur2 = "Papier";

let decision = defineGagnant(joueur1, joueur2)

if (decision === "Joueur1") {
    console.log("Joueur 1 gagne !")
} else if (decision === "Joueur2") {
    console.log("Joueur 2 gagne !")
} else if (decision === "Egalité") {
    console.log("Egalité")
} else {
    console.log("Error")
}
