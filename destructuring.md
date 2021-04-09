# Destructuring
* Le destructuring permets d’extraire des données d’un tableau ou d’un objet pour obtenir des variables
directement 

## Destructuring de tableau
* La decomposition de tableau permet d’extraire les valeurs contenues dans les cases pour les placés dans des variables  /!\ Je dois mettre les valeurs dans l’ordre que je souhaite les recupérer

```
let tab = [5, 10, 15, 20];
[n1,n2,n3,n4] = tab;
console.log(`Note 1 : ${n1}`)
console.log(`Note 2 : ${n2}`)
console.log(`Note 3 : ${n3}`)
console.log(`Note 4 : ${n4}`)
```

## Destructuring d’objet
* La décomposition d’objet permet d’extraire les valeurs contenues dans les propriétés pour les placer dans des variables /!\ Je dois utiliser le nom des proprietes 
```
let personnes = {
  p1 : "Tya",
  p2 : "Milo",
  p3 : "Lili"
};
({p1, p2, p3} = personnes);
console.log(p1);
console.log(p2);
console.log(p3);
```