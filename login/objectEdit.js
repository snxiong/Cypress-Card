function objectEdit(data_src) {
	var obj = document.getElementById('cardwindowimg');
	var obj2 = obj.cloneNode(true);
	obj2.data = data_src;
	
	if(document.getElementById('logoCheck').innerHTML == "0") {
		obj2.onload = function() {
			applySVGLogo('./logo00.png');
			markSelectedLogo('logo0');
		}
	}
	
	var holder = document.getElementById('cardwindow');
	holder.removeChild(obj);
	holder.appendChild(obj2);
}


function applySVGLogo(logo_name) {
	var image = document.querySelector('.svgClass').getSVGDocument().querySelector('.svglogo');
	image.setAttribute("href", logo_name);
}