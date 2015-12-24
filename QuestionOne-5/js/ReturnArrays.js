function returnNumArray(stringArray){
	//return a numericalArray
	var newArray = stringArray.split(" ").map(Number);
	return newArray;
}
function lCMCalculator(stringArray){
	//Next lines of commenyts for testing purposes only
	//console.log("String Array length is: " + stringArray.length);
	//var toClass = {}.toString;
	//console.log(toClass.call(stringArray));

 	var lcm = math.lcm.apply(null,stringArray);

	return lcm;
}
function runBoth (stringArray) {
	// body...
	var numberArray = returnNumArray(stringArray);
	console.log("Number Array is: " + numberArray)

	var LCM = lCMCalculator(numberArray);

	//testing numerical data comments
	//console.log("NumberArray is: " + numberArray);
	//console.log("LCM is: " + LCM);
	//alert("LCM is: "+ LCM);
	//return LCM;
	document.getElementById('lcm').innerHTML = LCM;
}