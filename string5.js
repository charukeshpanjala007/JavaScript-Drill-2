const convertArrToString = function(arr){
    output = ""
    if(arr!== undefined && arr!== null){
        for(let index=0; index<arr.length; index++){
            if(arr[index]!==undefined && arr[index]!==null){
                output += arr[index] + " "
            }else{
                output = ""
                break
            }
        }
    }
    return output
}

module.exports = convertArrToString