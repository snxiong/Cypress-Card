function sendEmail(pngData) {
	var email_text = document.getElementById('email_textfield').value;
	var data_str = 'email=' + email_text + '&' + 'png=' + pngData;
	
	//send to server
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4) {
			//Get return value, display in a popup box
			var return_text = this.responseText.slice(1, -1);
			alert(return_text);
		}
	};
	
	xhttp.open("POST", "email.php", true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhttp.send(data_str);
}