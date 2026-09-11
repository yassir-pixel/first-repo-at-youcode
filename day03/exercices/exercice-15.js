/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * RÉCURSIVITÉ (LE CONCEPT QUI RETOURNE LE CERVEAU)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Recréez la fonction fibonacci(n) (qui retourne le Nième terme de la suite) en utilisant la *récursivité* (la fonction s'appelle elle-même).
 * Condition d'arrêt : Si n <= 1, return n.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day03/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


const functionFibo = n => {
    if (n <= 1)
        return n
    else {
        let premier = 0;
        let deuxieme = 1;
        let suiteFibo = 0;
        console.log(0);
        console.log(1);
        for (let i = 0; i < n - 2; i++) {
            suiteFibo = premier + deuxieme;
            console.log(suiteFibo)
            premier = deuxieme;
            deuxieme = suiteFibo;
        }
        return suiteFibo
    }
}


// functionFibo(0))
//functionFibo(1))
functionFibo(10)