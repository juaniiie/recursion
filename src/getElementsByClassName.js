// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, nodes) {
  var elementClassArr = [];
  var node = nodes || document.body;
  if (node.classList && node.classList.contains(className)) {
    elementClassArr.push(node);
  }
  if (node.childNodes.length !== 0) {
    for (var i = 0; i < node.childNodes.length; i++) {
      elementClassArr = elementClassArr.concat(getElementsByClassName(className, node.childNodes[i]));
    }
  }
  return elementClassArr;
};

