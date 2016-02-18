/**
 * requires:
 * __.array-helpers.js
 */
(function(__, undefined) {
  __.createElement = function(options) {
    if (typeof options === 'undefined') {
      options = {};
    }
    if (typeof options.tag === 'undefined') {
      options.tag = 'span';
    }

    // set standard attributes
    var standardAttrs = ['id', 'title'];
    // get all arguments (options)
    var args = arguments[0];

    // create element
    var elem = document.createElement(options.tag);

    // loop through all arguments and add attributes to element
    if (typeof args === 'object') {
      for (var argName in args) {
        if (argName !== 'tag') {
          if (__.inArray(argName, standardAttrs)) {
            elem[argName] = args[argName];
          } else {
            elem.setAttribute(argName, args[argName]);
          }
        }
      }
    }

    return elem;
  }
})(window.__ = window.__ || {});
