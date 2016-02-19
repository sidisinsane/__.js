
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
