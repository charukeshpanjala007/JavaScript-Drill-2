const convertToTitleCase = function(str){
    let length = str.length
    return (str[0].toUpperCase()+str.slice(1,length).toLowerCase())

}


const getStringInTitleCase = function (obj) {
    output = ""
    if (obj != undefined && obj !== null) {
        const {first_name, middle_name, last_name} = obj
        if(first_name){
            output = (convertToTitleCase(first_name)) + " "
            if(middle_name){
                output += (convertToTitleCase(middle_name)) + " "
            }
            if(last_name){
                output += (convertToTitleCase(last_name)) + " "
            }
        }else{
            output = "Insufficient Data"
        }
    }else{
        output = "Insufficient Data"
    }
    return output
}

module.exports = getStringInTitleCase