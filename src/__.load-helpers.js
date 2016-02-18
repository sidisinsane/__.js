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
