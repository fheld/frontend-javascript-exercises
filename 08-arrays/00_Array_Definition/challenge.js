module.exports.newArray = function(ob1, ob2, ob3, ob4){
  var myArray = [ob1,ob2,ob3,ob4];
  return myArray;

};

module.exports.firstAndLast = function(inArray){
  var first = inArray[0];
  var last  = inArray[inArray.length - 1];
  var outArray = [first, last];
  return outArray;
};