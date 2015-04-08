module.exports.stream = function(conditionFn, actionFn){
     while(conditionFn())
        actionFn();
};

module.exports.sumNumbers = function(numbIn){
  var counter = 0;
  var sumOut = 0;
    while (counter < numbIn.length) {
         sumOut = sumOut + numbIn[counter];
      counter++;
    }
    return sumOut;
};



