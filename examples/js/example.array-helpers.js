function exampleArrayHelpers() {
  var needle = 'needle';
  var haystack = ['mice', 'hay', 'needle'];

  // __.inArray
  var inArray = __.inArray(needle, haystack);
  __.log(needle + (inArray ? '' : ' not') + ' found in haystack.');

  // __.arraySort
  var arraySort = __.arraySort(haystack, 'desc');
  __.log(arraySort);
}
exampleArrayHelpers();
exampleEmbed('exampleArrayHelpers');
