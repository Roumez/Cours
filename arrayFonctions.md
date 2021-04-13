# Fonctions sur les tableaux

* push / pop : permet d’ajouter / supprimer un élément à la fin du tableau
```
const personnes = ["Mina", "Milo","Tya"];
personnes.pop();
personnes.push("lili","Félicia");
console.log(personnes)
```
* slice (x,y): permet de créer une copie du tableau . x et y sont optionnels et representent respectivement l’indice de début (inclus) et l’indice de fin (exclu)
```
const personnes = ["Mina", "Milo","Tya","Lili","Félicia"];
const tab = personnes.slice ();
const tab2 = personnes.slice(2);
const tab3 = personnes.slice(2,4);
```
* map : permet de créer un nouveau tableau à partir des données d’un tableau initial, auquel on a appliqué une fonction modifiant toutes les valeurs
```
const personnes = ["Mina","Milo","Tya"];
const personneMin = personnes.map(function(p){
  return p.toLowerCase();
});
console.log(personnes);
console.log(personneMin);
```
* findIndex : permet de renvoyer le premier index d’une case d’un tableau correspondant au résultat d’une fonction de vérification
```
const personnes = ["Mina", "Milo", "Tya", "Lili", "Félicia"];
const index = personnes.findIndex(function(p){
  return p = "Tya";
});
console.log(`${personnes[index]} est présent à l’index : ${index}`);
```
* entries : permets de renvoyer un élément de type "iterator" contenant l’association index/valeur. Pour parcourir cet élement il faut utiliser un boucle for...of
```
const personnes = ["Mina","Milo","Tya"];
const tab = personnes.entries();
for (const [index, valeur] of tab){
  console.log(`${index} - ${valeur});
}
```
* includes : permet de tester si un tableau contient une valeur et renvoi vrai ou faux
```
const notes = ["Mina", "Milo", "Tya", "Lili", "Félicia"];
if(notes.includes("Lili")){console.log("Lili est dans le tableau")}
```