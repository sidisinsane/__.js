function exampleDomHelpers() {
  var elem = __.createElement({
      tag: 'a',
      rel: 'nofollow',
      href: '#',
      id: 'i-was-created-by-my-master',
      class: 'created created__by--master',
      'data-state': 'inactive',
      title: 'I feel so empty...'
    });
  document.querySelector('main').appendChild(elem);
  elem.innerHTML = 'My Master gave me purpose!';
}
exampleDomHelpers();
exampleEmbed('exampleDomHelpers');
