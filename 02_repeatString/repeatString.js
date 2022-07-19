const repeatString = function(string, num) {
    var res = "";
    if (num > 0){
        for (i = 0; i < num; i++){
            res += string;
        }
        return res;
    }else if (num == 0){
        return "";
    }else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
