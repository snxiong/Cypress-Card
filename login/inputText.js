//This function takes the text input in the specified input field
//and fills the corresponding svg text field with it.
function fillTextField(inputfield_id, classname) {
	var input_text = document.getElementById(inputfield_id).value;
	
	var textfield = document.querySelector('.svgClass').getSVGDocument().getElementsByClassName(classname);

	var textlimit = parseInt(textfield[1].innerHTML, 10);
	
	//Assign input_text to the innerHTML of a hidden span within cardeditor.html,
	//check if the string's width in pixels is greater than the limit, and if so,
	//reduce the string length until it is within the limit for that textfield.
	textfield[0].innerHTML = input_text;
	var i = input_text.length;
	var textwidth = getPixelWidth(textfield[0].innerHTML, classname);
	while(textwidth > textlimit) {
		input_text = input_text.slice(0,i);
		textfield[0].innerHTML = input_text;
		textwidth = getPixelWidth(textfield[0].innerHTML, classname);
		i -= 1;
	}
}

//Used to determine the width of a string in pixels
function getPixelWidth(text, classname) {
	var span = document.getElementById('measure');
	
	if(classname == 'name_c' || classname == 'company_c') {
		span.style.fontWeight = "bold";
	}
	else {
		span.style.fontWeight = "normal";
	}
	
	span.innerHTML = text;
	return span.offsetWidth;
}


//This function changes the text color of the selected textfield
//to the value specified by the button on the cardeditor.html page.
function fillTextColor(classname, color) {
	var textfield = document.querySelector('.svgClass').getSVGDocument().getElementsByClassName(classname);

	textfield[0].style.fill = color;
}



function handleEmployButtons(empl_id) {
	if(empl_id == "button_unempl") {
		var inputfield_list = document.querySelectorAll(".inputfield");
		inputfield_list[1].style.display = "none"; //Position
		inputfield_list[2].style.display = "none"; //Company Name
		
		var textfield_list = document.querySelector('.svgClass').getSVGDocument().getElementsByClassName("position_c");
		textfield_list[0].innerHTML = "";
		
		var textfield_list = document.querySelector('.svgClass').getSVGDocument().getElementsByClassName("company_c");
		textfield_list[0].innerHTML = "";
	}
	else if(empl_id == "button_empl") {
		var inputfield_list = document.querySelectorAll(".inputfield");
		inputfield_list[1].style.display = "block"; //Position
		inputfield_list[2].style.display = "block"; //Company Name
		
		fillTextField("positionname", "position_c");
		fillTextField("companyname", "company_c");
	}
	else {
		
	}
}