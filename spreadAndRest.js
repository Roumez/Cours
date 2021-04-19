// const classes = {
//   Guerrier: { classe: 'war', force: 5, agilite: 3, intelligence: 2 },
//   Archer: { classe: 'archer', force: 3, agilite: 5, intelligence: 3 },
//   Mage: { classe: 'mage', force: 2, agilite: 3, intelligence: 5 }
// }
// const persoGuerrier = {
//   nom: 'Milo',
//   age: 30,
//   ...classes.Guerrier
// }

// const persoArcher = {
//   nom: 'Tya',
//   age: 22,
//   ...classes.Archer
// }

// const persoMage = {
//   nom: 'Soso',
//   age: 22,
//   ...classes.Mage
// }

// const affichagePerso = (...persos) => {
//   for (let perso of persos) {
//     console.log(
//       `************************
//   Nom : ${perso.nom}  
//   Age : ${perso.age} 
//   classe : ${perso.classe}
//   Liste des caractéristiques : 
//   Force : ${perso.force} 
//   Agilite : ${perso.agilite} 
//   intelligence : ${perso.intelligence}`)
//   }
// }

// affichagePerso(persoGuerrier, persoArcher, persoMage)



// const additionner = (...number) => {
//   let result = 0
//   for (let elem of number) {
//     console.log(result += elem)
//   }
//   return result
// }
// console.log(`le resultat est : ${additionner(5, 10, 15, 20)}`)


// const multiplier = (...number) => {
//   let result = 1
//   for (let valeur of number) {
//     result *= valeur
//   }
//   return result
// }
// console.log(`le resultat est : ${multiplier(5, 10, 15, 20)}`)

const createSelect = (table, ...conditions) => {
  let cond = "";
  for (let [key, c] of conditions.entries()) {
    cond += `${c.champ} = "${c.valeur}" `;
    if (key != conditions.length - 1) cond += "AND ";
  }
  return `select * from ${table} where "${cond}`
}
let requete = createSelect("livre", { champ: "type", valeur: "policier" }, { champ: "auteur", valeur: "Milo" }, { champ: "couleur", valeur: "bleu" });
console.log(requete)