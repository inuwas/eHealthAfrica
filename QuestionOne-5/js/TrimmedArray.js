var inputArray = [];
function trimArray(insertChar){
	inputArray = insertChar.split(" ").map(Number);
	return inputArray;	
}
function displayArray()
{
	var trimmedArray = [];
	for(i = 0; i < inputArray.length; i++){
		var testNumber = inputArray[i];
		//console.log("Test Number: "+testNumber);
		if (trimmedArray.indexOf(testNumber) < 0 )
		{
			trimmedArray.push(testNumber);
		}
	}
	document.getElementById('trimmedArray').innerHTML = trimmedArray;
}

function runThem(someValue){
	trimArray(someValue);
	displayArray();
}