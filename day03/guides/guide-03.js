/**
 * JOUR 03 — GUIDE 03
 * La syntaxe moderne (Fonction Fléchée)
 *
 * OBJECTIF
 * Transformez la fonction classique function carre(x) { return x * x; } en sa version la plus courte en fonction fléchée.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.

console.log("declaration de la fonction normale")
console.log("*-------------------------------*")
function functionNonFlecheCarre(x) {
    return x * x;
}

console.log(functionNonFlecheCarre(2))
console.log("*-------------------------------*")
console.log("declaration de la fontion d'une maniere plus courte")
console.log("*-------------------------------*")
const carre = x => x * x;

console.log(carre(2))
console.log("*-------------------------------*")