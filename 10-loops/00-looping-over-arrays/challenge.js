module.exports.sumNumbers = function(arrayIn){
    var sum = 0;
    for (var counter = 0; counter < arrayIn.length; counter++)
    {
      sum = sum + arrayIn[counter];
    }
    return sum;
};

module.exports.splitAndLowerCaseString = function(inputString){
    var lower = inputString.toLowerCase();
    var splitArray = lower.split(",");
    return splitArray;
};

module.exports.addIndex = function(arrayIn){
    arrayOut = [];
    for (var index = 0; index < arrayIn.length; index++) {
      arrayOut.push(index + " is " + arrayIn[index]);
    }
    return arrayOut;
};
