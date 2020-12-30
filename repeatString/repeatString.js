const repeatString = function(string, times) {
var repeatedString = "hey"

while (times >= 0){
    repeatedString += string
    times--
}
return repeatedString
}
module.exports = repeatString
