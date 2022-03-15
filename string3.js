const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const getMonthFunction = function (date) {
    let output
    if (date) {
        const month = date.split("/")[0]
        if ((parseInt(month)) == month && parseInt(month)<=12) {
            output = months[parseInt(month) - 1]
        } else {
            output = "Invalid Input"
        }
    } else {
        output = "Invalid Input"
    }
    return output
}

module.exports = getMonthFunction