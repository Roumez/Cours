const afficherTableMultiplication = (n, d = 1, f = 10) => {
  if (d > f) {
    let tmp = d
    d = f
    f = tmp
  }
  for (let i = d; i < f; ++i) {
    console.log(`${i} * ${n} = ${n * i}`)
  }
}
afficherTableMultiplication(5, 8, 5)