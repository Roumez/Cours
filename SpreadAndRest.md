# Spread

* Permet de separer et recuperer les elements d’un tableau ou d’un objet.
Un tableau et un objet ne pouvent pas etre dupliques directement. En effet cela reviendrait à faire une copie de reference (pointeur)
```
Bad code
const notes = [5, 10, 15, 20];
const tab = notes;
tab.push(15, 20
console.log(notes);
console.log(tab);
Ici c’est la référence vers quoi pointe le tableau notes qui est copiée !!!
```

```
Good code
const notes = [5, 10, 15, 20];
const tab = [...notes];
tab.push(15,20)
console.log(notes); => [5, 10, 15, 20]
console.log(tab); => [5, 10, 15, 20, 15, 20]
```

```
Good code sur objet
const perso = {
  nom: "Milo",
  age: 31
}
const persoGuerrier = {
  ...perso,
  type: "Guerrier",
  force: 5
}
console.log(perso); => {nom : 'Milo', age: 31}
console.log(persoGuerrier); => {nom : 'Milo', age: 31, type: 'Guerrier', force: 5}
```

* Il est possible de combiner le "Destructuring" et l’opérateur "Spread"
```
let perso = {
  nom : "Wawa",
  classe: "Guerrier",
  force: 5,
  agilite: 3,
  intelligence: 2,
}
let {nom, classe, ...carac} = perso;
console.log (`Nom: ${nom} - Classe : ${classe}`); => Nom: Wawa - classe : Guerrier
console.log(carac) => {force: 5, agilite: 3, intelligence: 2}
```

# Rest

* Permet de regrouper une liste d’arguments passée en paramètre de fonction dans un tableau unique et d’utiliser les fonctions disponibles sur les tableaux.
```
let perso1 = {nom:"Milo", age:31};
let perso2 = {nom:"Tya", age:20};
let perso3 = {nom:"Toto", age:25};
const afficherPersos = (...persos) => {
  console.log(persos)
}
afficherPersos(perso1, perso2, perso3) => 
[
  { nom: 'Milo', age: 31 },
  { nom: 'Tya', age: 20 },
  { nom: 'Toto', age: 25 }
]
```