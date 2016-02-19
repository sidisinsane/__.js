function exampleEventHelpers() {
  var toggler = document.querySelector('.whatever__toggle');
  __.addEventListener(toggler, ['click', 'mouseover', 'mouseout'], function() {
    __.toggleState(this, 'active', 'inactive');
  }, false);
}
exampleEventHelpers();
exampleEmbed('exampleEventHelpers');
