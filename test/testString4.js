const Problem4 = require("../string4.js")

console.log("Test Case- 1")
let result = Problem4({"first_name": "JoHN", "last_name": "SMith"})
console.log(result) 

console.log("Test Case- 2")
result = Problem4(null)
console.log(result) 

console.log("Test Case- 3")
result = Problem4({"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"})
console.log(result) 

console.log("Test Case- 4")
result = Problem4(undefined)
console.log(result) 

console.log("Test Case- 5")
result = Problem4("")
console.log(result) 

console.log("Test Case- 6")
result = Problem4({"middle_name": "doe", "last_name": "SMith"})
console.log(result) 