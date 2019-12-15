function saveData() {
	var card = document.getElementById('cardwindowimg');
	
	var cardnum = card.data.slice(-6,-4);
	
	var cardlogoloc = document.querySelector('.svgClass').getSVGDocument().querySelector('.svglogo').href.baseVal;
	var cardlogo = cardlogoloc.slice(-6,-4);
	
	var colors = document.getElementById('colorholder').innerHTML;
	
	var data_str = "str=" + cardnum + "," + colors + "," + cardlogo + ";";
	
	//send to server
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4) {
			window.location.href = "cardeditor.html";
		}
	};
	
	xhttp.open("POST", "writeCardProperties.php", true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttp.send(data_str);
}


function loadData() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			buildCardTemplate(this.responseText);
		}
	};
	
	xhttp.open("POST", "writeCardProperties.php", true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttp.send("str=LOAD");
}

function buildCardTemplate(card_props_str) {
	card_props_str = card_props_str.slice(1,-1);
	var cardnum = card_props_str.slice(0,2);
	var color1 = card_props_str.slice(3,10);
	var color2 = card_props_str.slice(11,18);
	var color3 = card_props_str.slice(19,26);
	var color4 = card_props_str.slice(27,34);
	var cardlogo = card_props_str.slice(35,37);
	
	var cardobj = document.getElementById('cardcontainerimg');
	cardobj.data = "./businesscard" + cardnum + ".svg";
	
	cardobj.onload = function() {
		var color1array = cardobj.getSVGDocument().getElementsByClassName('color1');
		for(var x = 0; x < color1array.length; x++) {
			color1array[x].setAttribute("fill", color1);
		}
		
		var color2array = cardobj.getSVGDocument().getElementsByClassName('color2');
		for(var x = 0; x < color2array.length; x++) {
			color2array[x].setAttribute("fill", color2);
		}
		
		var color3array = cardobj.getSVGDocument().getElementsByClassName('color3');
		for(var x = 0; x < color3array.length; x++) {
			color3array[x].setAttribute("fill", color3);
		}
		
		var color4array = cardobj.getSVGDocument().getElementsByClassName('color4');
		for(var x = 0; x < color4array.length; x++) {
			color4array[x].setAttribute("fill", color4);
		}
		
		applySVGLogo("./logo" + cardlogo + ".png");
	}
}