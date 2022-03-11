const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const getMonthFunction = function (date) {
    let output
    if (date !== undefined && date != null) {
        const [day, month, year] = date.split("/")
        if (Number.isInteger(parseInt(month))) {
            output = months[parseInt(month) - 1]
        } else {
            output = "Not Found"
        }
    } else {
        output = "Not Found"
    }
    return output
}

module.exports = getMonthFunction