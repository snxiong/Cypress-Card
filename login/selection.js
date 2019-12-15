function markSelectedColorScheme(label_id) {
	var label_list = document.querySelectorAll(".colorSchemeBox > label");
	for(var x = 0; x < label_list.length; x++) {
		label_list[x].style.backgroundColor = "#c0c663";
	}

	var label = document.getElementById(label_id);
	label.style.backgroundColor = "#8ea149";
	
	//A color scheme was selected
	document.getElementById('colorSchemeCheck').innerHTML = "1";
}

function markSelectedCardTemplate(cardlabel_id) {
	var label_list = document.querySelectorAll(".column_cards > label > img");
	for(var x = 0; x < label_list.length; x++) {
		label_list[x].style.border = "1px solid #000000";
	}
	
	var label = document.querySelector(".column_cards > label[for=" + cardlabel_id + "]");
	var img = label.querySelector('img');
	img.style.border = "5px solid #000000";
	
	//A card template was selected
	document.getElementById('cardCheck').innerHTML = "1";
}


function markSelectedLogo(logolabel_id) {
	var label_list = document.querySelectorAll(".column_logos > label > img");
	for(var x = 0; x < label_list.length; x++) {
		label_list[x].style.border = "1px solid #000000";
	}
	
	var label = document.querySelector(".column_logos > label[for=" + logolabel_id + "]");
	var img = label.querySelector('img');
	img.style.border = "5px solid #000000";
	
	//A logo was selected
	document.getElementById('logoCheck').innerHTML = "1";
}


function markSelectedSwapButton(button_id) {
	var label_list = document.querySelectorAll("#swapspacecontainer > label");
	for(var x = 0; x < label_list.length; x++) {
		label_list[x].style.backgroundColor = "#c0c663";
	}
	
	var label = document.getElementById(button_id);
	label.style.backgroundColor = "#8ea149";
}

function swapSpace(toggle) {
	if(toggle == "logos") {
		document.querySelector('.parent_cards').style.display='none';
		document.querySelector('.parent_logos').style.display='block';
	}
	else if(toggle == "cards") {
		document.querySelector('.parent_logos').style.display='none';
		document.querySelector('.parent_cards').style.display='block';
	}
	else {
		
	}
}


function checkForCompletion() {
	if(document.getElementById('cardCheck').innerHTML == "1") {
		if(document.getElementById('logoCheck').innerHTML == "1") {
			if(document.getElementById('colorSchemeCheck').innerHTML == "1") {
				if(document.getElementById('colorSetCheck').innerHTML == "1") {
					saveData();
				}
				else {
					alert("Please select a color set.");
				}
			}
			else {
				alert("Please select a color scheme.");
			}
		}
		else {
			alert("Please select a logo.");
		}
	}
	else {
		alert("Please select a card template.");
	}
}


function markSelectedEmployButton(employbutton_id) {
	var label_list = document.querySelectorAll("#employcontainer > label");
	for(var x = 0; x < label_list.length; x++) {
		label_list[x].style.backgroundColor = "#c0c663";
	}
	
	var label = document.getElementById(employbutton_id);
	label.style.backgroundColor = "#8ea149";
}