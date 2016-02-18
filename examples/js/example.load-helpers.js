function exampleLoadHelpers() {
  var jsonPath = 'data/sherlock-holmes.jsonld';

  __.loadJson(jsonPath, function(data) {
    jsonObj = JSON.parse(data);
    jsonStr = JSON.stringify(jsonObj);

    var scriptElem = __.createElement({
      tag: 'script',
      id: 'datablock-with-json-ld',
      type: 'application/ld+json'
    });
    document.querySelector('body').appendChild(scriptElem);
    scriptElem.innerHTML = jsonStr;
  });
}
exampleLoadHelpers();
exampleEmbed('exampleLoadHelpers');
