var wordsArr = [];
var wordsArr2 = [];
var prevWords = [];
var buttonPress = document.getElementById("submit");
function printPrevWords() {
    var i = ("Previous set of words, sorted : " + prevWords);
    document.getElementById("printOut").innerHTML = i;
    prevWords = [];
};
function save(){
	//Select words
	var word1 = document.getElementById("word1id").value;
	var word2 = document.getElementById("word2id").value;
	/*takes words splits the letters up
	sorts them alphabetically
	rejoins them
	removes white space
	*/
	word1 = word1.split("").sort().join("").replace(/ /g,"");
	word2 = word2.split("").sort().join("").replace(/ /g,"");
	//print words to console for trouble shooting
	console.log("word 1 = " + word1);
	console.log("word 2 = "+ word2);
	//Resulting functions
	if (word1 == word2){
		prevWords.push(word1,word2);
		console.log(prevWords);
		printPrevWords();
		alert("This is an equal anagram");

		return true;
	}
	else {
		prevWords.push(word1,word2);
		printPrevWords();
		alert("Not an equal anagram");
		return false;
	}
};
buttonPress.onclick = save;
