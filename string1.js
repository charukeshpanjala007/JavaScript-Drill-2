module.exports = function (strings) {
    output = []
    if (strings != undefined && strings != null) {
        for (let index = 0; index < strings.length; index++) {
            let string = (strings[index])
            let number
            if (string !== undefined && string != null) {
                if (string.startsWith("-")) {
                    number = "-" + (string.slice(2, string.length))
                } else {
                    number = (string.slice(1, string.length))
                }
                number = number.replace(",", "");
                if (number.endsWith(".")) {
                    let stringIndex = number.length - 1
                    while (stringIndex > 0) {
                        if (number[stringIndex] === ".") {
                            number[stringIndex] = ""
                        } else {
                            break;
                        }
                        stringIndex -= 1
                    }
                }
                if (parseFloat(number) == number) {
                    output.push(number)
                } else {
                    output.push(0)
                }
            }else{
                output.push(0)
            }
        }
    } else {
        output.push(0)
    }
    return (output)
}