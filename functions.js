let notes1 = [5, 10, 15, 20];
let notes2 = [2, 4, 6];

let moyenne = (note) => {
  let moyenne = 0
  for (let elem of note) {
    moyenne += elem
  }
  return moyenne / note.length
}

let ajout1 = (note) => {
  tab = []
  plus1 = 1
  for (let i = 0; i < note.length; ++i) {
    tab.push(note[i] + plus1)
  }
  return tab
}

const additionnerTab = (note1, note2) => {
  //Quelle note à la plus grande taille pour itérer dessus
  let taille = note1.length;
  if (note1.length < note2.length) taille = note2.length
  newTab = [];
  for (let i = 0; i < taille; ++i) {
    // Si note1[i] ou note2[i] existent alors indiquer la note sinon mettre 0 
    // pour additionner avec l’autre tableau et ne pas avoir une erreur
    let valeur = (note1[i]) ? note1[i] : 0;
    valeur += (note2[i]) ? note2[i] : 0;
    newTab.push(valeur);
  }
  return newTab
}

console.log(`La moyenne du tableau 1 est: ${moyenne(notes1)}`)
console.log(`La moyenne du tableau 2 est: ${moyenne(notes2)}`)
console.log(`Le tableau 1 majoré donne : ${ajout1(notes1)}`)
console.log(`Le tableau 1 majoré donne : ${ajout1(notes2)}`)
console.log(`Voici le résultat des tableaux additionnés: ${additionnerTab(notes1, notes2)}`)