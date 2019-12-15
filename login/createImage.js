function createCanvasData(choice) {
	//The hidden canvas
	var canvas = document.getElementById('imagecreator');
	var ctx = canvas.getContext('2d');
	
	//The card container svg file
	var svg = document.getElementById('cardcontainerimg').getSVGDocument();
	
	//Need to get the filename and coords of the selected logo
	var logo = svg.querySelector('.svglogo').href.baseVal;
	var logo_x = svg.querySelector('.svglogo').x.baseVal.value;
	var logo_y = svg.querySelector('.svglogo').y.baseVal.value;
	
	//The rest of the svg data can be converted to a string
    svg_xml = (new XMLSerializer()).serializeToString(svg);
	
	//The string data of the svg can be applied to a new image
    var img = new Image();
    img.src = "data:image/svg+xml;base64," + btoa(svg_xml);

	//When the new image loads...
    img.onload = function() {
		//Draw the image to the canvas
        ctx.drawImage(img, 0, 0);
		
		//We need a new image for the logo
		var img_logo = new Image();
		img_logo.src = logo;
		
		//When the logo image loads...
		img_logo.onload = function() {
			//Draw the logo at the proper coords
			ctx.drawImage(img_logo, logo_x, logo_y);
			
			//Now safe to convert to png and send to server
			savePNG(choice);
		}
    }
}


function savePNG(choice) {
	//The hidden canvas
	var canvas = document.getElementById('imagecreator');
	
	//Convert canvas to png image data
	var imgData = canvas.toDataURL("image/png");
	
	if(choice === "1") { //If Download button was pushed
		document.getElementById('download_button').setAttribute("href", imgData.replace(/^data:image\/[^;]/, 'data:application/octet-stream'));
		document.getElementById('download_button').setAttribute("download", 'businesscard.png');
		document.getElementById('download_button').click();
	}
	else if(choice === "2") {
		sendEmail(imgData);
	}
	else {
		//Nothing...
	}
}
