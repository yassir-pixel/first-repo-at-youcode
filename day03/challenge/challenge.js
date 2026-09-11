/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · CHALLENGE
 * LE GESTIONNAIRE D'INVENTAIRE DE L'AVENTURIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer l'inventaire (sac à dos) d'un héros dans un jeu vidéo, en utilisant uniquement des fonctions pour manipuler la "mémoire" globale.
 *
 * Consignes :
 * 1. Déclarez une variable globale (hors des fonctions) or = 0.
 * 2. Créez une fonction ajouterOr(montant) qui ajoute à la bourse et affiche "Vous avez ramassé [montant] or. Total: [or]".
 * 3. Créez une fonction depenserOr(montant) qui vérifie si le héros a assez d'or. Si oui, déduit l'or et affiche l'achat. Sinon, affiche "Fonds insuffisants".
 * 4. Créez une fonction combatGagne() qui appelle ajouterOr avec un montant aléatoire entre 10 et 50.
 * 5. Simulez une aventure : gagnez 3 combats, puis tentez d'acheter une épée à 100 or.
 * Bonus : Utilisez des closures pour éviter d'avoir or en variable globale vulnérable !
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day03/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
var or = 0;

const ajouterOr = montant => {
    or += montant
    console.log(`Vous avez ramassé ${montant} or. Total: ${or}`);
}

const depenserOr = montant => {
    if (montant > or)
        console.log("Fonds insuffisants");
    else {
        or -= montant;
        console.log(`achat effectué avec succés il vous reste ${or} dans votre porte-monnaie`);
    }
}

const combatGagner = () => {
    console.log("Bien jouez vous avez gagner votre combat")
    ajouterOr(Math.floor((Math.random().toFixed(1) * 30) + 10))
}


console.log(`Bienvenue Petit Aventurier \n vous allez commencer avec ${or} Coin`)
console.log(`parter a la recher des trésors et ne manquait pas d'explorer les plaines et caves \n rencontrer des co-équipier pour faciliter votre taches et surtout fait attention au traitre `)
console.log(`Bon Courage .....`)

combatGagner();
combatGagner();
combatGagner();

depenserOr(100)

for (; or <= 100;) {
    combatGagner();
}

depenserOr(100);





