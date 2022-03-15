const Problem3 = require("../string3.js")

console.log("Test Case- 1")
let result = Problem3("10/2/2022")
console.log(result) 

console.log("Test Case- 2")
result = Problem3(null)
console.log(result) 

console.log("Test Case- 3")
result = Problem3("x/yy/mm")
console.log(result) 

console.log("Test Case- 4")
result = Problem3(undefined)
console.log(result) 

console.log("Test Case- 5")
result = Problem3("20/20/2020")
console.log(result) 

console.log("Test Case- 6")
result = Problem3("null")
console.log(result) 