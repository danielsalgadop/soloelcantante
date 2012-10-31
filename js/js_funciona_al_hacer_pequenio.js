$(document).ready(function() {
	methodToFixLayout();
	$(window).bind("resize", methodToFixLayout);
});

function methodToFixLayout(){
	var h = $(window).height();
	alert(h);
	// el header mide de alto 218 , el footer mide de alto 67px = TOTAL 285

	h = h - 285;
	if(h < 385){ 	// si la altura es menor de 385, poner scroll
//		h = 385;
//		$('#contenido').css('overflow','scroll');
		$('#contenido').css('overflow-y','scroll');
		$('#contenido').css('overflow-x','hidden');
	}
	else {
		$('#contenido').css('overflow','hidden');
	}
/*	alert('alto '+h+'px');*/
	$('#contenido').css('height',h+'px');
}

// si el hueco para el contenido es mayor que 900
