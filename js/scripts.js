//backend logic



//jQuery functionality
$(document).on("submit", "form#word-input", function(){
  event.preventDefault();

  var vowels = "aeiou";
  var wordDashed = "";
  var str = $("#new-word").val();

  for (x = 0; x < str.length; x++){
    var letter = str.charAt(x);
  	for ( var y = 0; y < vowels.length; y++){
    	if (letter === vowels.charAt(y)){
      	letter = "-";
      }
    }
    wordDashed += letter;
  }
  console.log(wordDashed);



  $("#output").append("<h3 id='dashed-word'>"+wordDashed+"</h3>");
});
