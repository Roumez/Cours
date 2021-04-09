let names = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
] // un tableau de tableau
for (let i = 0; i < names.length; ++i) {
  console.log(`Array ${i + 1}:`)
  for (let j = 0; j < names[i].length; ++j) {
    console.log(`\t${names[i][j]}`)
  }
}

// Calculer la moyenne d’un tableau avec la boucle For of
const notes = [5, 10, 15, 20];
let result = 0
for (let elem of notes) {
  result += elem
}
console.log(`La moyenne des notes est de : ${result / notes.length} `)

// Calculer la moyenne des notes avec un tableau For in
const notes = [5, 10, 15, 20];
let result = 0
const calculMoyenne = () => {
  for (let indice in notes) {
    result += notes[indice]
  }
  return result / notes.length
}

console.log(`La moyenne des notes est de : ${calculMoyenne()} `)