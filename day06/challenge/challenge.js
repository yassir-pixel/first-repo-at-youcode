/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.

var idUtilisateur = 0;
let utilisateurs = [];

function ajouterUtilisateur(nom, email) {
    let newUser = {};

    newUser.id = idUtilisateur++;
    newUser.nom = nom;
    newUser.email = email;

    utilisateurs.push(newUser);
}

function trouverParEmail(email) {
    for (let user in utilisateurs) {
        if (utilisateurs[user].email == email) {
            return utilisateurs[user];
        }
    }
}

function supprimerParId(id) {
    let index = 0;
    for (let user in utilisateurs) {
        if (utilisateurs[user].id == id) {
            utilisateurs.splice(id, 1)
        }
        index++;
    }
}

function afficherAnnuaire() {
    console.log("-------------------------------------------------------------|")
    for (let user in utilisateurs) {
        console.log(`User |> ${utilisateurs[user].nom} | Email |> ${utilisateurs[user].email} | Id |> ${utilisateurs[user].id}`)
        console.log("-------------------------------------------------------------|")
    }
}

ajouterUtilisateur("Yassir", "yassir.taous42@gmail.com")
ajouterUtilisateur("Freaks", "freaks@gmail.com")
ajouterUtilisateur("Bart", "bart@gmail.com")

console.log("Tableau des Utilisateur Initiale :\n")
afficherAnnuaire()
console.log("\n")
supprimerParId(2)
console.log("Tableau des Utilisateur apres modification :\n")
afficherAnnuaire()
