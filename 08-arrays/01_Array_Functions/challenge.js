module.exports.reversePlusOne = function(arrayIn){
   arrayIn.reverse();
   arrayIn.unshift(1);
   return arrayIn;

};

module.exports.plusesEverywhere = function(arrayIn){
  return arrayIn.join("+");
};

module.exports.arrayQuantityPlusOne = function(arrayIn){
  return arrayIn.length + 1;
};