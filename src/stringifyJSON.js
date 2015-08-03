 // this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'boolean') {
    return obj += '';
  }
  if (typeof obj === 'string') {
    var str = '"' + obj + '"';
    return str;
  }
  if (typeof obj === 'number') {
    var num = obj.toString();
    return num;
  }
  if (typeof obj === 'function' || obj === undefined) {
    return undefined;
  }
  if (obj === null) {
    return 'null';
  }
  var finalArr = [];
  var tempString = '';
  var tempArr1 = [];
  if (typeof obj == 'object' && !Array.isArray(obj) && obj !== null) {
    for (var key in obj)  {
      if (typeof obj[key] === 'boolean') {
        tempArr1.push(key);
        tempArr1[0] = '"' + tempArr1[0] + '"';
        tempArr1.push(obj[key]);
        tempString = tempArr1.join(':');
        finalArr.push(tempString);
        tempArr1 = [];
        tempString = '';
      }
      if (typeof obj[key] === 'string') {
        obj[key] = '"' + obj[key] + '"';
        tempArr1.push(key);
        tempArr1[0] = '"' + tempArr1[0] + '"';
        tempArr1.push(obj[key]);
        tempString = tempArr1.join(':');
        finalArr.push(tempString);
        tempArr1 = [];
        tempString = '';
      }
      if (typeof obj[key] === 'number') {
        tempArr1.push(key);
        tempArr1[0] = '"' + tempArr1[0] + '"';
        tempArr1.push(obj[key]);
        tempString = tempArr1.join(':');
        finalArr.push(tempString);
        tempArr1 = [];
        tempString = '';
      }
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        delete obj[key];
      }
      if (obj[key] === null) {
        obj[key] = 'null';
        tempArr1.push(key);
        tempArr1[0] = '"' + tempArr1[0] + '"';
        tempArr1.push(obj[key]);
        tempString = tempArr1.join(':');
        finalArr.push(tempString);
        tempArr1 = [];
        tempString = '';
      }
      if (typeof obj[key] == 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
        tempArr1.push(key);
        tempArr1[0] = '"' + tempArr1[0] + '"';
        tempArr1.push(stringifyJSON(obj[key]));
        tempString = tempArr1.join(':');
        finalArr.push(tempString);
        tempArr1 = [];
        tempString = '';
      }
      if (Array.isArray(obj[key]) === true) {
        tempArr1.push(key);
        tempArr1[0] = '"' + tempArr1[0] + '"';
        tempArr1.push(stringifyJSON(obj[key]));
        tempString = tempArr1.join(':');
        finalArr.push(tempString);
        tempArr1 = [];
        tempString = '';
      }
    }
    finalArr = '{' + finalArr + '}';
    return finalArr;
  }
  var concatArr = [];
  if (Array.isArray(obj) === true) {
    for (var k = 0; k < obj.length; k++)  {
      if (typeof obj[k] === 'boolean') {
        var boo = obj[k];
        concatArr.push(boo);
      }
      if (typeof obj[k] === 'string') {
        var nStri = '"' + obj[k] + '"';
        concatArr.push(nStri);
      }
      if (typeof obj[k] === 'number') {
        var nu = obj[k];
        concatArr.push(nu);
      }
      if (typeof obj[k] === 'function') {
        concatArr.push('null');
      }
      if (obj[k] === undefined || obj[k] === null) {
        concatArr.push('null');
      }
      if (typeof obj[k] === 'object' && !Array.isArray(obj[k]) && obj[k] !== null) {
        concatArr.push(stringifyJSON(obj[k]));
      }
      if (Array.isArray(obj[k]) === true) {
        concatArr.push(stringifyJSON(obj[k]));
      }
    }
    var result2 = '[' + concatArr + ']';
    return result2;
  }
};
