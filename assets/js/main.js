let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000]

/* Zahlen aufsteigend sortieren */
numArray2.sort(sortAscending = (a, b) => a - b)
console.log(numArray2)


/* Alternative Schreibweise */
sortAscending = (a, b) => { return a - b }
numArray2.sort(sortAscending)
console.log(numArray2)
