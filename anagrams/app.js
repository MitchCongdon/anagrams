var wordsArr = [];
var wordsArr2 = [];
var prevWords = [];
var buttonPress = document.getElementById("submit");
function printPrevWords() {
    var i = ("Previous set of words, sorted : " + prevWords);
    document.getElementById("printOut").innerHTML = i;
};
function save(){
	var word1 = document.getElementById("word1id").value;
	var word2 = document.getElementById("word2id").value;
	word1 = word1.split("").sort().join("");
	word2 = word2.split("").sort().join("");
	console.log(word1,word2);
	if (word1 == word2){
		prevWords.push(word1,word2);
		console.log(prevWords);
		printPrevWords();
		alert("True anagram");

		return true;
	}
	else {
		prevWords.push(word1,word2);
		printPrevWords();
		alert("false anagram");
		return false;
	}
};
buttonPress.onclick = save;
