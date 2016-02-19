
/**
 * __.array-helpers.js
 */

(function(__, undefined) {
  __.inArray = function(needle, haystack) {
    return Array(haystack).join(',').indexOf(needle) >-1;
  }

  __.arraySort = function(array, direction) {
    if (typeof dir === 'undefined' || !__.inArray(direction, ['asc', 'desc'])) {
      dir = 'asc';
    }
    return array.sort(function(a, b) {
      return (direction == 'desc') ? b.localeCompare(a) : a.localeCompare(b);
    });
  }
})(window.__ = window.__ || {});


/**
 * __.dom-helpers.js
 */

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


/**
 * __.event-helpers.js
 */

(function(__, undefined) {
  __.addEventListener = function(elem, events, handler, useCapture, args) {
    if (events instanceof Array) {
      // create a wrapper for to be able to use additional arguments
      var handlerFn = function(e) {
        handler.apply(this, args && args instanceof Array ? args : []);
        e.preventDefault();
      }
      for (var i=0; i < events.length; i+=1) {
        elem.addEventListener(events[i], handlerFn, useCapture);
      }
    } else {
      elem.addEventListener(events, handler, useCapture);
    }
  }
})(window.__ = window.__ || {});

(function(__, undefined) {
  __.toggleState = function(elem, firstState, secondState) {
    elem.setAttribute('data-state', elem.getAttribute('data-state') === firstState ? secondState : firstState);
  }
})(window.__ = window.__ || {});


/**
 * __.load-helpers.js
 */

(function(__, undefined) {
  __.loadJson = function(jsonPath, callback) {
    var xobj = new XMLHttpRequest();

    xobj.overrideMimeType('application/json');
    xobj.open('GET', jsonPath, true);

    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == '200') {
        callback(xobj.responseText);
      }
    };

    xobj.send(null);
  }
})(window.__ = window.__ || {});


/**
 * __.output-helpers.js
 */

(function(__, undefined) {
  __.log = function(data, loop) {
    // ie console.log fallback
    typeof console == 'undefined' && (console = {});
    typeof console.log == 'undefined' && (console.log = function() {});

    if (typeof loop !== 'undefined' && typeof data === 'object') {
      for (var item in data) {
        console.log(item + ': ' + data[item]);
      }
    } else {
      console.log(data);
    }
  }
})(window.__ = window.__ || {});
