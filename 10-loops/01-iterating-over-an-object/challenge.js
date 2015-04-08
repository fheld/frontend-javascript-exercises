module.exports.getKeys = function(objectIn){
   arrayOut = [];
    for (var property in objectIn) {
      arrayOut.push(property);
    }
    return arrayOut;
};

module.exports.getValues = function(objectIn){
      arrayOut = [];
     for (var property in objectIn) {
      arrayOut.push(objectIn[property]);
    }
    return arrayOut;  
};


module.exports.objectToArray = function(objectIn){
      arrayOut = [];
     for (var property in objectIn) {
      arrayOut.push(property + " is " + objectIn[property]);
    }
    return arrayOut;  
};