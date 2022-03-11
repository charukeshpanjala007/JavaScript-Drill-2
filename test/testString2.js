const Problem2 = require("../string2.js")

console.log("Test Case- 1")
let result = Problem2("111.139.161.143")
console.log(result) 

console.log("Test Case- 2")
result = Problem2(null)
console.log(result) 

console.log("Test Case- 3")
result = Problem2("x")
console.log(result) 

console.log("Test Case- 4")
result = Problem2(undefined)
console.log(result) 

console.log("Test Case- 5")
result = Problem2("")
console.log(result) 

console.log("Test Case- 6")
result = Problem2("null")
console.log(result) 