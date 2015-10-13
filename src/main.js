(function () {

  // var firstItem = etsy.results[0];

  var templateString = $('#itemTemplate').text();

  var templateFunction = _.template(templateString);

let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'
}).then (function (response) {

_.each(response.results, function (item) {
    var itemHTML = templateFunction(item);
    $('.graphics').append(itemHTML);

  // console.log(response);
});


  

  });

}());
