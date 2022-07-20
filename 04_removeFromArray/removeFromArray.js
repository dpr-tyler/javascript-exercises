const removeFromArray = function(array, firstElem, ...lastElem) {
    
    for (j = 1; j < arguments.length; j++){
        for (i = 0; i < array.length; i++){
            if (array[i] === arguments[j]){
                //console.log(array[i]);
                array.splice(i, 1);
            }
        }
    }
    return array;
};

//var test = removeFromArray([1, 2, 3, 4], 3);
//console.log(test);

// Do not edit below this line
module.exports = removeFromArray;
