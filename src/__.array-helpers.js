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
