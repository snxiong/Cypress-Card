var global = 0;
var cl1 = "#ffffff";
var cl2 = "#ffffff";
var cl3 = "#ffffff";
var cl4 = "#ffffff";

function draw(firstColor, secondColor, thirdColor, fourthColor)
{	
	var firstColorElements = document.querySelector(".svgClass").getSVGDocument().getElementsByClassName('color1');
	for(var i = 0; i < firstColorElements.length; i++)
	{
		firstColorElements[i].setAttribute("fill", firstColor);
		cl1 = firstColor;
	}
	
	var secondColorElements = document.querySelector(".svgClass").getSVGDocument().getElementsByClassName('color2');
	for(var x = 0; x < secondColorElements.length; x++)
	{
		secondColorElements[x].setAttribute("fill", secondColor);
		cl2 = secondColor;
	}
	
	var thirdColorElements = document.querySelector(".svgClass").getSVGDocument().getElementsByClassName('color3');
	for(var y = 0; y < thirdColorElements.length; y++)
	{
		if(document.getElementById('Complementary').checked)	// if complementary was selected
		{
			thirdColorElements[y].setAttribute("fill", firstColor);
			cl3 = firstColor;
		}
		else {
			thirdColorElements[y].setAttribute("fill", thirdColor);
			cl3 = thirdColor;
		}
	}
	
	var fourthColorElements = document.querySelector(".svgClass").getSVGDocument().getElementsByClassName('color4');
	for(var z = 0; z < fourthColorElements.length; z++)
	{
		if(document.getElementById('Complementary').checked)// if complementary was selected
		{
			fourthColorElements[z].setAttribute("fill", secondColor);
			cl4 = secondColor;
		}
		else if(document.getElementById('TeTratic').checked)// if TeTratic was selected
		{
			fourthColorElements[z].setAttribute("fill", fourthColor);
			cl4 = fourthColor;
		}
		else	// else 1 of the 3  triple color combination was selected
		{
			if(global == 0)
			{
				global++;
				fourthColorElements[z].setAttribute("fill", secondColor);
				cl4 = secondColor;
			}
			else if(global == 1)
			{
				global++;
				fourthColorElements[z].setAttribute("fill", thirdColor);
				cl4 = thirdColor;
			}
			else
			{
				global = 0;
				fourthColorElements[z].setAttribute("fill", firstColor);
				cl4 = firstColor;
			}
		}
	}
	
	
	
	document.getElementById('colorholder').innerHTML = cl1 + "," + cl2 + "," + cl3 + "," + cl4;
	
	//A color set was selected
	document.getElementById('colorSetCheck').innerHTML = "1";
	
}