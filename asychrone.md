# Asynchronous programming
* Le programme continue son execution sans attendre la fin de la tâche asynchrone
* Les promesses permettent de réaliser des traitements asynchrones, par l’intermédiaire de la fonctiion 
"then()". Nous mettons en evidence les erreurs dans la fonction "catch()"

```
const promesse = new Promise((resolve, reject) => {
  console.log(`Etaaaaape 1`)
  setTimeout(() => {
    resolve(`coucou`)
  }, 1000)
  console.log(`Etaaaaape 3`)
})
promesse.then((valeur) => {
  console.log(valeur)
  console.log(`Etaaaaape 2`)
})
```


* async permet d’indiquer qu’une fonction est asynchrone
* await permet de mettre en attente le retour d’une fonction associer obligatoirement à une promise
* async et await sont indissociable


```
const fs = require('fs')
const myReadFile = async() => {
  try {
    const p1 = fsPromises.readFile('hello.txt', 'utf-8')
    const p2 = fsPromises.appendFile('hello.txt', 'some new data')
    console.log(p1)
    console.log(p2)
    let txt = await p1
    await p2
    console.log(p1)
    console.log(p2)
  }catch(e){
    console.error(e.message)
  }
}
myReadFile()
```
node myReadFile.js
Promise {<pending>}
Promise {<pending>}
Promise {'Hello world ! some new data'}
Promise {undefined}
Text read: Hello world ! some new data
```

```