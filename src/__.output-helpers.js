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
