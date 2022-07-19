const reverseString = function(string) {
    if (string != ''){
        var splitString = string.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        return joinArray;
    }else{
        return "";
    }
};

// Do not edit below this line
module.exports = reverseString;
