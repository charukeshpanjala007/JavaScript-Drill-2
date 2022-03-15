const convertToTitleCase = function (str) {
    let length = str.length
    return (str[0].toUpperCase() + str.slice(1, length).toLowerCase())

}


const getStringInTitleCase = function (obj) {
    output = ""
    if (obj) {
        const { first_name, middle_name, last_name } = obj
        if (first_name) {
            output = (convertToTitleCase(first_name)) + " "
        }
        if (middle_name) {
            output += (convertToTitleCase(middle_name)) + " "
        }
        if (last_name) {
            output += (convertToTitleCase(last_name)) + " "
        }
    }
    return output
}

module.exports = getStringInTitleCase