const Problem5 = require("../string5.js")

console.log("Test Case- 1")
let result = Problem5(["the", "quick", "brown", "fox"])
console.log(result) 

console.log("Test Case- 2")
result = Problem5([null])
console.log(result) 

console.log("Test Case- 3")
result = Problem5(["the", undefined, "brown", "fox"])
console.log(result) 

console.log("Test Case- 4")
result = Problem5(undefined)
console.log(result) 

console.log("Test Case- 5")
result = Problem5([""])
console.log(result) 

console.log("Test Case- 6")
result = Problem5(["the", null, "brown", "fox"])
console.log(result) 