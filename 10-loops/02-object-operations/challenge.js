module.exports.copy = function(objectIn){
      objectOut = new Object();
     for (var property in objectIn) {
      objectOut[property] = objectIn[property];
     }
    return objectOut;  
  };

module.exports.extend = function(dest, src){
     for (var property in src) {
      dest[property] = src[property];
     }
     return dest;  
  };

module.exports.hasElems = function(objectIn, arrayIn){
  var hasProperties = true;
  for (var index = 0; index < arrayIn.length; index++) {
    if ( !objectIn.hasOwnProperty(arrayIn[index])) {
          hasProperties = false;
    }
  }
   return hasProperties;
};