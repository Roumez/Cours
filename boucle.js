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


// Creation d’un programme qui va permettre de faire 10 fois "pile ou face" et qui comptera le nombre de pile et de faces obtenus

const randoms = [];
for (let i = 0; i < 10; ++i) {
  randoms.push(Math.floor(Math.random() * 2))
}
let pile = 0
let face = 0
for (let elem of randoms) {
  if (elem === 0) pile++
  else face++
}
console.log(`Le nombre de piles est de : ${pile}, le nombre de faces est de : ${face}, le nombre \
de faces represente: ${(face / (pile + face)) * 100}%`)

// Programme qui calcul la factorielle d’un nombre
let nb = 5
let result = 1
for (let i = 1; i <= nb; ++i) {
  result = result * i
}
console.log(result)