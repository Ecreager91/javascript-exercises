const repeatString = function(string, times) {

var repeatedString = "";    
while (times > 0){
repeatedString += string
times--
}
if (times < 0){
    return "ERROR"
}
else
return repeatedString
}

module.exports = repeatString
