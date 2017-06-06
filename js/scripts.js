var vowels = "aeiou";
var str = "boulevard";

for (x = 0; x < str.length; x++){
  var letter = str.charAt(x);
	for ( var y = 0; y < vowels.length; y++){
  	if (letter === vowels.charAt(y)){
    	letter = "-";
    }
  }
  console.log(letter);
}
