
var parseQuote = function(response) {
  document.getElementById("qte").innerHTML = response.quoteText;
  if (response.quoteAuthor === "") {
    document.getElementById("auth").innerHTML = "Anonymous";
  } else {
    document.getElementById("auth").innerHTML = response.quoteAuthor;
  }
  var quote = "$('#qte').text()";
  var auth = response.quoteAuthor;
}

$("#tweet").click(function(){
 var tweet = "https://twitter.com/intent/tweet?text=" + $('#qte').text() + " - " + $('#auth').text();
$('#tweet').attr("href", tweet);  

});


var generateQuote = function() {
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "en",
      format: "jsonp"
    },
    success: parseQuote
  });
}
