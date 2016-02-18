# __.js

**__.js** is a small, extendable JavaScript library for modern browsers (IE9+) that provides a few useful functional programming helpers. 


## Helpers

### Output helpers

#### __.log

##### Example
```javascript
__.log('I will appear in your console.');
```

##### Result in console: `I will appear in your console.`


### Array helpers

#### __.inArray

##### Example
```javascript
var needle = 'needle';
var haystack = ['mice', 'hay', 'needle'];
var inArray = __.inArray(needle, haystack);
__.log(needle + (inArray ? '' : ' not') + ' found in haystack.');
```

##### Result in console: `needle found in haystack.`

####__.arraySort

##### Example
```javascript
var haystack = ['mice', 'hay', 'needle'];
var arraySort = __.arraySort(haystack, 'desc');
__.log(arraySort);
```

##### Result in console: `["needle", "mice", "hay"]`


### DOM manipulation helpers

####__.createElement

##### Example
```javascript
var elem = __.createElement({
    tag: 'a',
    rel: 'nofollow',
    href: '#',
    id: 'i-was-created-by-my-master',
    class: 'created created__by--master',
    'data-state': 'inactive',
    title: 'I feel so empty...'
  });
document.querySelector('body').appendChild(elem);
elem.innerHTML = 'My Master gave me purpose!';
```

##### Result in DOM
```html
<a rel="nofollow" href="#" id="i-was-created-by-my-master" class="created created__by--master" data-state="inactive" title="I feel so empty...">My Master gave me purpose!?</a>
```


### Load helpers

####__.loadJson

##### Example
*Scenario: Load an external json-ld file for passing validation in Google's [Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/).*
```javascript
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
```

##### Loaded file *data/sherlock-holmes.jsonld*
```json
{
  "@context": "http://schema.org/",
  "@type": "Person",
  "name": "Sherlock Holmes",
  "givenName": "William",
  "additionalName": "Sherlock Scott",
  "familyName": "Holmes",
  "honorificPrefix": "Mr.",
  "jobTitle": "Consulting Detective",
  "sameAs": [
    "https://en.wikipedia.org/wiki/Sherlock_Holmes"
  ],
  "gender": "male",
  "birthDate": "1854-01-06",
  "homeLocation": {
    "@type": "Place",
    "geo": {
    "@type": "GeoCoordinates",
      "latitude": "51.523778",
      "longitude": "-0.160716"
    },
    "hasMap": "https://www.google.com/maps/place/51%C2%B031'25.6%22N+0%C2%B009'30.7%22W/@51.523778,-0.160716,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x0",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "London",
      "postalCode": "NW1 6XE",
      "streetAddress": "221B Baker St",
      "addressCountry": "GB"
    }
  }
}
```

##### Result in DOM
```html
<script id="datablock-with-json-ld" type="application/ld+json">{"@context":"http://schema.org/","@type":"Person","name":"Sherlock Holmes","givenName":"William","additionalName":"Sherlock Scott","familyName":"Holmes","honorificPrefix":"Mr.","jobTitle":"Consulting Detective","sameAs":["https://en.wikipedia.org/wiki/Sherlock_Holmes"],"gender":"male","birthDate":"1854-01-06","homeLocation":{"@type":"Place","geo":{"@type":"GeoCoordinates","latitude":"51.523778","longitude":"-0.160716"},"hasMap":"https://www.google.com/maps/place/51%C2%B031'25.6%22N+0%C2%B009'30.7%22W/@51.523778,-0.160716,17z/data=!3m1!4b1!4m2!3m1!1s0x0:0x0","address":{"@type":"PostalAddress","addressLocality":"London","addressRegion":"London","postalCode":"NW1 6XE","streetAddress":"221B Baker St","addressCountry":"GB"}}}</script>
```
