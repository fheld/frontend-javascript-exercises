module.exports.addItem = function(itemIn, listIn){
   if(listIn.indexOf(itemIn)== -1){
    listIn.push(itemIn);
   }
   return listIn;
};

module.exports.reverseSortedList = function(arrayIn){
  arrayIn.sort();
  arrayIn.reverse();
  return arrayIn;
};