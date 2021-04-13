const notes = [5, 10, 15, 20];
const tab = notes.entries();
for (let [index, valeur] of tab) {
  if (valeur % 2 === 0) {
    console.log(`Note numéro ${index} : ${valeur}`)
  }
}
const notes = [5, 10, 15, 20];

const tab = notes.map((n) => {
  return n ** 2
})
console.log(tab)

let tab = [
  { nom: "Tya", age: 25 },
  { nom: "Toto", age: 22 },
  { nom: "Milo", age: 25 },
  { nom: "Mina", age: 52 },

]

const tabName = (nom) => {
  return tab.findIndex((perso) => {
    return perso.nom === nom
  })
}

console.log(tab.splice(tabName("Toto"), 1))
console.log(tab)

const mot = "Bonjour"

let tab = mot.split('')
console.log(tab)
let reverse = tab.reverse()
console.log(reverse)
if (tab === reverse) {
  console.log(`${mot} est un palimdrome`)
} else {
  console.log(`${mot} n’est pas un palimdrome`)
}
const mot = "rever"
const estPalimdrome = (mot) => {
  let tab = mot.split('').reverse().join('')
  if (tab === mot) console.log(`${mot} est un palimdrome`)
  else console.log(`${mot} n’est pat un palimdrome`)
}
estPalimdrome(mot)