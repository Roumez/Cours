# Gestion des erreurs

## ERREUR opérationnelle
* manip de process ou de fichier
* erreur reseau
* interaction avec user...

## Principes
- Lorsque le programme crash nous pouvons identifier l’erreur or certaines erreurs ne font pas crasher notre programme donc difficilement gérable
ENOENT: Error No ENTry
callstack erreur ligne blanche nous dit ou ça crash dans notre programme

## fonction throw => fonction fs et axios
* Mettre dans un try {
  list error
}catch(e){
  console.log(e.message)
}

## fonction asynchrone avec promise away et non callback