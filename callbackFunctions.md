# Callback function

* Une fonction de rappel est une fonction qui est passée en paramètre d’une autre fonction

```
const calculPar3 = (x,maFonctionDeCalcul) => {
  let y = 3;
  console.log("Cette fonction permet de faire un calcul !")
  console.log(maFenctionDeCalcul(x,y));
}
const addition = (x,y) => {
  return x + y;
}
const multiplication = (x,y) => {
  return x * y;
}
calculPar3(2,addition); ==========>Le 2e parametre est la fonction de rappel
calculPar3(6,multiplication);=====>
```
```
const notes = [5, 10, 15, 20]
const notes2 = notes.map((element, index, tab) => {
  console.log("************************");
  console.log(`element: ${element}`);
  console.log(`index: ${index}`);
  console.log(`tab: ${tab}`);
  return element*2
})
console.log(notes2)
```