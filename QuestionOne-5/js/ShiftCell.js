function shiftCell(shiftValue, shiftArray)
{
	//shift by number of cells
	//Get the string and convert to a numerical array
	theArray = shiftArray.split(" ").map(Number);
	console.log("The Array = "+theArray);
	shiftedArray = [];
	for(i = 0; i < shiftValue; i++)
	{
		var shiftIndex = theArray.length - shiftValue + i;
		var shiftedValue = theArray[shiftIndex];
		shiftedArray.push(shiftedValue);
	}
	var newArrayLength = theArray.length - shiftValue;
	for (j =  0 ; j <  newArrayLength; j++) 
	{
		var shiftedValue = theArray[j];
		shiftedArray.push(shiftedValue);
	};	
	//console.log("Shifted Array is: "+ shiftedArray);
	document.getElementById('shiftCell').innerHTML = shiftedArray;
	return shiftedArray;
}