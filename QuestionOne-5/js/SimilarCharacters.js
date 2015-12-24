//solution for order NbyN
function find_char_NbyN(string1, string2)
{
	//var similarCharacters = ""
	var characters = "";
	//var characterAt = "";
	for (i=0; i < string1.length; i++)
	{
		//Get the character in string1 and position i and compare it to letters in string2
		var compareA = string1.charAt(i);
		for( chars in string2)
		{		
			if(compareA == string2.charAt(chars))
			{
				characters += compareA;
			}
		}
	}

	var unique=""; 
	for(var q=0; q<characters.length; q++)
	{
		var ch= characters.charAt(q);
		/*if(unique.indexOf(ch) < 0)
		{
			unique += characters.charAt(q);
		}*/
		unique = (unique.indexOf(ch) < 0 ? unique += characters.charAt(q): unique);
	}
	/** Uncommment to use the split method instead of for loop*/
	//var filtered = characters.split("").filter(function(x, n, s) { return s.indexOf(x) == n }).join(", ");
	//console.log("filtered "+filtered);
	//console.log(" Similar Characters: " + unique);
	document.getElementById('uniqueString').innerHTML = unique;
	return unique;

}
//Solution for order N
function find_char_N(string1, string2)
{
	var character = "";
	var similarCharacters = "";
	for(i =0 ; i<string1.length;i++)
	{
		characters = string1.charAt(i);
		//if the value of the character in position i matches character in the second string add the character to the array
		if (string2.indexOf(characters) > -1) {
			similarCharacters+=characters;
		};
	}
	var filtered = similarCharacters.split("").filter(function(x, n, s) { return s.indexOf(x) == n }).join(", ");
	document.getElementById("uniqueString2").innerHTML = filtered
}

function find_char(string1, string2)
{
	find_char_NbyN(string1,string2);
	find_char_N(string1,string2);
}
