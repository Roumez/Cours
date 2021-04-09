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