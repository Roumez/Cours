# Boucle For
* Permets de réaliser une boucle et de répéter des actions un nombre de fois défini à l’avance.
* Cette boucle est très utile dans le cadre des tableaux avec la propriété .length

```
const notes = [5, 10, 15, 20];
for (let i = 0; i < notes.length; ++i){
  console.log(`note numéro ${i + 1} : ${notes[i]}`)
}
```

## Boucle for in

* Utiliser dans les objets et tableaux **(Déconseillé pour les tableaux si l’ordre des élements est important)**, Elle nous permets d’avoir l’indice et la valeur

```
const notes = [5, 10, 15, 20];
for (const index in notes){
  let num = parseInt(index) + 1;
  console.log(`Note numéro ${num} : ${notes[index]}`);
}
```
```
let perso = {
  nom : "Matthieu",
  age : 30
}
for (let propriete in perso){
  console.log(`${propriete} : ${perso[propriete]}`)
}
```

## Boucle for of
* Elle permets de boucler sur des tableaux. 
* Elle nous permets d’avoir les valeurs d’un tableau

```
const notes = [5, 10, 15, 20];
for (const note of notes){
  console.log(`Note : ${note}`)
}
```

## forEach pour les arrays
* La méthode .forEach exécute une fonction pour chaque éléments d'un tableau.

```
[1, 2, 3, 4, 5].forEach((elem) => {
  console.log(elem)
})
```

## Nested loops 
* Des boucles while, do-while, for peuvent être imbriqués
```
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
```