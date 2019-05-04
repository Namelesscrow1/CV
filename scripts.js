window.onload = function() {
	var derecha = document.getElementById('derecha');
	var contenido = document.getElementById ("contenido");


	window.onscroll = function (e) {
		var x = contenido.offsetLeft;
		var w = contenido.offsetWidth;
		console.log( x + w );
		if( document.documentElement.scrollTop > 60 ) {
			derecha.style.position = "fixed";
			derecha.style.left = (x + w) + "px";
		}	
		else{
			derecha.style.position = "absolute";
			derecha.style.left = "";

		}		
	}
}