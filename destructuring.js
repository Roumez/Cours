const villes = {
  paris: { nom: "Paris", lat: 48, long: 2 },
  Toulouse: { nom: "Toulouse", lat: 56, long: 1 },
  Lyon: { nom: "Lyon", lat: 32, long: 4 },
};
let { Lyon } = villes
affichageCoordonnees(Lyon)

function affichageCoordonnees(Lyon) {
  let { nom, lat, long } = Lyon
  let affichage = `
  -----${nom}-------
  Latitude : ${lat}
  Longitude : ${long}`;
  console.log(affichage)
}



// const villes = [
//   ["Paris", 48, 2],
//   ["Toulouse", 46, 1],
//   ["Lyon", 45, 4],
// ];
// [paname, toulousaine, lyonnaise] = villes
// affichageCoordonnees(lyonnaise)


// function affichageCoordonnees(ville) {
//   let [nom, lat, long] = ville;
//   let affichage = ``
//   affichage += `-----${nom}--------
//   Latitude : ${lat}
//   Longitude : ${long}`
//   console.log(affichage)
// }


// const V1 = { nom: "Paris", lat: 48, long: 2 };
// const V2 = { nom: "Toulouse", lat: 48, long: 2 };
// const V3 = { nom: "Lyon", lat: 48, long: 2 };



// const affichageCoordonnees = (nom, lat, long) => {
//   console.log(`-------${nom}--------- 
//   latitude : ${lat}
//   longitude : ${long} \n`)
// }
// affichageCoordonnees(V1.nom, V1.lat, V1.long)
// affichageCoordonnees(V2.nom, V2.lat, V2.long)
// affichageCoordonnees(V3.nom, V3.lat, V3.long)


// padEnd et padStart
// let nom = "Mathieu";
// let txt = nom.padStart(nom.length + 5, "-")
// let txt2 = txt.padEnd(txt.length + 5, "-")
// console.log(txt2)