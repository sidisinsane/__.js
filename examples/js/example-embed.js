function exampleEmbed(funcName, selector) {
  if (typeof selector == 'undefined') {
    selector = 'main';
  }

  var elem = __.createElement({
    tag: 'code',
    'data-language': 'javascript'
  });
  
  document.querySelector(selector).appendChild(elem);
  var source = window[funcName]
    .toString()
    .replace(/^function.*/,'')
    .slice(0, -1);
  elem.innerHTML = source;
}
