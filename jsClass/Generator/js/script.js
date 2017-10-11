function getRandomColor(){
	return 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ','
                     + (Math.floor((256-199)*Math.random()) + 200) + ','
                     + (Math.floor((256-199)*Math.random()) + 200) + ')';
}

$(document).ready(function() {
    var hue = getRandomColor();
    $('body').css("background-color", hue);
});

$(document).ready(function() {
    var hue = getRandomColor();
    var right = Math.random()*80 + '%';
    var bottom = Math.random()*80 + '%';
    var width = (Math.random()*75 + 25) + 'vw';
    var height = (Math.random()*75 + 25) + 'vh';

    $('#square').css("background", hue);
    $('#square').css("right", right);
    $('#square').css("bottom", bottom);
    $('#square').css("width", width);
    $('#square').css("height", height);
});

$(document).ready(function() {
    var hue = getRandomColor();
    var right = Math.random()*80 + '%';
    var bottom = Math.random()*80 + '%';
    var diameter = (Math.random()*75 + 25) + 'vh';

  	$('#circle').css("background", hue);
  	$('#circle').css("right", right);
    $('#circle').css("bottom", bottom);
    $('#circle').css("width", diameter);
   	$('#circle').css("height", diameter);

});

$(document).ready(function() {
    var hue = getRandomColor();
    var right = Math.random()*80 + '%';
    var bottom = Math.random()*80 + '%';
    var randomWidthNumber = Math.floor(Math.random() * 60 / 2 ) * 2 + 20;
    var bottomWidth = randomWidthNumber + 'vh';
    var sideWidth = randomWidthNumber/2 + 'vh';

    $('#triangle').css("border-bottom-color", hue);
    $('#triangle').css("right", right);
    $('#triangle').css("bottom", bottom);
    $('#triangle').css("border-bottom-width", bottomWidth);
    $('#triangle').css("border-left-width", sideWidth);
    $('#triangle').css("border-right-width", sideWidth);
});


// sentence
$(document).ready(function() {

	var grammarObj = {
	"sentence1": ["The square is #personality#,"],
	"sentence2": ["the circle is #personality#,"],
	"sentence3": ["and the triangle is #personality#."],
	"personality": ["adaptable", "adventurous", "aectionate", "ambitious", "amiable", "compassionate", "considerate", "courageous", "courteous", "diligent", "empathetic", "exuberant", "frank", "generous", "gregarious", "impartial", "intuitive", "inventive", "passionate", "persistent", "philosophical", "practical", "rational", "reliable", "resourceful", "sensible", "sincere", "sympathetic", "unassuming", "witty"]
	}

	var grammar = tracery.createGrammar(grammarObj)

	var t1 = grammar.flatten("#sentence1#");
	var t2 = grammar.flatten("#sentence2#");
	var t3 = grammar.flatten("#sentence3#");
	
	$('#sentence1').text(t1);
	$('#sentence2').text(t2);
	$('#sentence3').text(t3);


});
