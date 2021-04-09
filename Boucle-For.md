# Boucle For
* Permets de réaliser une boucle et de répéter des actions un nombre de fois défini à l’avance.
* Cette boucle est très utile dans le cadre des tableaux avec la propriété .length

'''
const notes = [5, 10, 15, 20];
for (let i = 0; i < notes.length; ++i){
  console.log(`note numéro ${i + 1} : ${notes[i]}`)
}
'''

## Boucle for in

* Utiliser dans les objets et tableaux **(Déconseillé pour les tableaux si l’ordre des élements est important)**, Elle nous permets d’avoir l’indice et la valeur

'''
const notes = [5, 10, 15, 20];
for (const index in notes){
  let num = parseInt(index) + 1;
  console.log(`Note numéro ${num} : ${notes[index]}`);
}
'''
'''
let perso = {
  nom : "Matthieu",
  age : 30
}
for (let propriete in perso){
  console.log(`${propriete} : ${perso[propriete]}`)
}
'''

## Boucle for of
* Elle permets de boucler sur des tableaux. 
* Elle nous permets d’avoir la valeur dans un tableau

'''
const notes = [5, 10, 15, 20];
for (const note of notes){
  console.log(`Note : ${note}`)
}
'''