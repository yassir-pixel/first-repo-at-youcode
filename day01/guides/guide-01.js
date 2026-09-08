/**
 * JOUR 01 — GUIDE 01
 * Le Permutateur (Variables)
 *
 * OBJECTIF
 * Vous avez deux variables a = 5 et b = 10. Vous devez échanger leurs valeurs pour que a vaille 10 et b vaille 5.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.

let a = 5
let b = 10

console.log(`valeur de a avant le swap: ${a}`)
console.log(`valeur de b avant le swap: ${b}`)
console.log("---------------------------------")
let tmp;

tmp = a;
a = b;
b = tmp;

console.log(`valeur de a apres le swap: ${a}`)
console.log(`valeur de b apres le swap: ${b}`)