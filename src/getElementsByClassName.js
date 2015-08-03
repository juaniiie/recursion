// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var args = className.split(' ');
  var nodelist = [];
  var findClass = function(element, className) {
    for (var i = 0; i < element.childNodes.length; i++) {
      var contains = true;
      for (var j = 0; j < args.length; j++) {
        if (element.childNodes[i].classList === undefined) {
          contains = false;
        }else if (!element.childNodes[i].classList.contains(args[j])) {
          contains = false;
        }
      }
      if (contains) {
        nodelist = nodelist.concat(element.childNodes[i]);
      }
      if (element.childNodes[i].childNodes.length > 0) {
        findClass(element.childNodes[i], args);
      }
    }
  };
  findClass(document, args);
  return nodelist;
};
