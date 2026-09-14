/**
 * JOUR 04 — GUIDE 02
 * Recherche de mot-clé (Sensibilité à la casse)
 *
 * OBJECTIF
 * Vérifiez si le mot "javascript" est présent dans la phrase "J'apprends le JavaScript à YouCode". La recherche doit ignorer les majuscules/minuscules.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.

let haystack = "J'apprends le Javascript à Youcode"
let needle = "javascript"

let phraseMinuscule = haystack.toLowerCase();

if (phraseMinuscule.includes(needle) == true) {
    console.log("Le mot rechercher est present")
} else {
    console.log("Le mot rechercher n'est pas présent")
}