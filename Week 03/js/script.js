var keyWord = "";

// insert data into html
function loadResult(data){

	var articles = data.response.docs
	for (var i = 0; i < articles.length; i++) {

		var head = document.createElement("h1");
		var h = document.createTextNode(articles[i].headline.main);
		head.appendChild(h);
		document.body.appendChild(head);

		var para = document.createElement("p");                       // Create a <p> element
		var t = document.createTextNode(articles[i].snippet);       // Create a text node
		para.appendChild(t);                                          // Append the text to <p>
		document.body.appendChild(para);                              // Append <p> to <body>

}

}
 
// get API
function getApi(){
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "567ff3bc64c14f07963bc630d1e51d47",
  'q': keyWord
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  loadResult(result)
}).fail(function(err) {
  throw err;
});
}

// pass key word when submit is clicked
function searchKeyWord() {
	keyWord = $('#keyWord').val(); // get value from key word input

	if(keyWord == null || keyWord =='' ){
		alert('You need to type a key word');
	}
	
	getApi();
}

// init
function init() {

	$('#submit').click(function(e){
		e.preventDefault();
		searchKeyWord();
		$("p").empty();
		$("h1").empty();
	});
}
// run on load
$(document).ready(function(){
	init();
});

