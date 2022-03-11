const splitIpFunction = function (ip) {
    let output=[]
    if (ip !== undefined && ip != null) {
        const ipArray = ip.split(".")
        for (let index = 0; index < ipArray.length; index++ ){
            if(Number.isInteger(parseInt(ipArray[index]))){
                output.push(ipArray[index])
            }else{
                output = []
                break;
            }
        }
    }else{
        output = []
    }
    return output
}

module.exports = splitIpFunction