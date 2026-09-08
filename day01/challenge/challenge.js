/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · CHALLENGE
 * LE SIMULATEUR DE PRÊT BANCAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Vous allez coder le cœur logique d'une application de crédit bancaire.
 *
 * Consignes :
 * 1. L'utilisateur fournit 3 données (variables) : montantEmprunte (ex: 100000), dureeEnMois (ex: 24), revenuMensuel (ex: 8000).
 * 2. Vérifiez si l'utilisateur est éligible : la mensualité estimée (montantEmprunte / dureeEnMois) ne doit pas dépasser 30% de son revenuMensuel.
 * 3. S'il est éligible, affichez "Prêt accordé. Mensualité : [X] MAD".
 * 4. S'il n'est pas éligible, mais que son revenu est supérieur à 10000 MAD, proposez d'augmenter la durée. Sinon, affichez "Prêt refusé".
 *
 * Exemple de test : montant 100 000, 24 mois (mensualité: 4166.66). 30% de 8000 = 2400. Donc le prêt est refusé, et comme le revenu n'est pas > 10000, "Prêt refusé".
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day01/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.

function isEligibleUser(montant, duree, revenue) {
    let value = revenue * 0.3
    if ((montant / duree) < value)
        return true;
    else
        return false;
}

let montantEmprunte = 100000;
let dureeEnMois = 24;
let revenueMensuel = 11000;

let isEligible = isEligibleUser(montantEmprunte, dureeEnMois, revenueMensuel);

if (isEligible == true) {
    let mensualité = montantEmprunte / dureeEnMois
    console.log(`Prêt accordé. Mensualité : ${mensualité} MAD`)
} else {
    if (revenueMensuel > 10000) {
        let nouvelleDurée;
        while (!isEligibleUser(montantEmprunte, dureeEnMois, revenueMensuel))
            dureeEnMois += 1;
        nouvelleDurée = dureeEnMois;
        console.log(`Puisque votre revenue depasse 10000 vaut mieux augmenté votre durée de paiment a ${nouvelleDurée} mois`)
    } else {
        console.log("Prêt refusé")
    }
}