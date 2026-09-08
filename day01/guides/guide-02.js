/**
 * JOUR 01 — GUIDE 02
 * Le Détecteur de Types (Types primitifs)
 *
 * OBJECTIF
 * On vous donne une variable data = "123". Affichez son type, convertissez-la en nombre, puis affichez à nouveau son type.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.

let data = "123"

console.log(`le type de ma variable est : ${typeof data}`)

data = Number(data)
// let convertedData = Number(data)
// console.log(`le type de ma variable apres la convertion est : ${typeof convertedData}`)

console.log(`le type de ma variable apres la convertion est : ${typeof data}`)