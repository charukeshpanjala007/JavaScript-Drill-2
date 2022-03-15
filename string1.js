const getNumber = (string) => {
    let number = ""
    if (string[0] == "-") {
        number += "-" + string.slice(2, string.length)
    } else {
        number += string.slice(1, string.length)
    }
    while(number[number.length-1]==="."){
        number = number.slice(0,number.length-1)
    }
    if(Number.parseFloat(number)== number){
        return number
    }else{
        return 0
    }
}

const convertStringToNumber = (string) => {
    if (string) {
        return getNumber(string)

    } else {
        return 0
    }
}


const stringProblem1 = (string) => {
    let output = []
    if (Array.isArray(string)) {
        for (let index = 0; index < string.length; index++) {
            let number = convertStringToNumber(string[index])
            output.push(number)
        }
    } else {
        output = convertStringToNumber(string)
    }
    return output
}

module.exports = stringProblem1