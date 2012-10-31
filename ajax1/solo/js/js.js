// Detectar el navegador del cliente
//if (window.XMLHttpRequest)
  //{// code for IE7+, Firefox, Chrome, Opera, Safari
//  xmlhttp=new XMLHttpRequest();
//  }
//else
 // {// code for IE6, IE5
 // xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//  } 


$(document).ready(function() {
	sinSeleccionados();
	methodToFixLayout();
	$(window).bind("resize", methodToFixLayout);
	 jQuery('#discografia').css('display', 'none');
	 jQuery('#conciertos').css('display', 'none');
	 jQuery('#videos').css('display', 'none');	
	// aqui vendran las descargas
	 jQuery('#contacto').css('display', 'none');
	 jQuery('#descargas').css('display', 'none');	

	// jquery cycle
	$('.slideshowclass').cycle({
		fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});

	// LOS BBBBBBBBBOOOOOoTTTTTTTTTTTTTOOOOOOOOOOOOOOOOONNNNNNNNNNNNNEEEEEEEESSSSSSS
	// *.gif -> por defecto
	//*2.gif -> hover
	//*3.gif -> EN LA PAGINA
	//*4.gif -> EN PAGINA Y hover
	// LOS BBBBBBBBBOOOOOoTTTTTTTTTTTTTOOOOOOOOOOOOOOOOONNNNNNNNNNNNNEEEEEEEESSSSSSS
	$('#boton_discografia').click(function (){
			resetBotones();
			$('#sdiscografia').css('display', 'block');
			$('#boton_discografia').css('display', 'none');
	});
	$('#boton_conciertos').click(function (){
			resetBotones();
			$('#sconciertos').css('display', 'block');
			$('#boton_conciertos').css('display', 'none');
	});
	$('#boton_videos').click(function (){
			resetBotones();
			$('#svideos').css('display', 'block');
			$('#boton_videos').css('display', 'none');
	});
	$('#boton_descargas').click(function (){
			resetBotones();
			$('#sdescargas').css('display', 'block');
			$('#boton_descargas').css('display', 'none');
	});
	$('#boton_contacto').click(function (){
			resetBotones();
			$('#scontacto').css('display', 'block');
			$('#boton_contacto').css('display', 'none');
	});

});
// ¿cual es la diferencia entre entre conNoSeleccionados y  sinSeleccionados
function resetBotones(){
	sinSeleccionados();
	conNoSeleccionados();
}
// Deseleccion 
function conNoSeleccionados(){
	$(".no_seleccionado").each(function(){
		this.style.display = "block";
	});	
}

var pagina='index';
function sinSeleccionados(){
	$(".seleccionado").each(function(){
		this.style.display = "none";
	});
}


// Donde controlar el ancho y alto de la pagina
function methodToFixLayout(){
	var h = $(window).height();
	var w = $(window).width();
	// PARTE HORIZONTAL
	// el header mide de alto 218 , el footer mide de alto 67px = TOTAL 285
	h = h - 285;
	// Poner un minimo no es tan facil. el footer no baja. Una solucion es posicionar el footer con el valor de h
//	if (h < 400){
//		h = 400;
//	}
	$('#contenido').css('max-height',h+'px');
	$('#contenido').css('overflow-y','auto');
	$('#contenido').css('overflow-x','hidden');
	$('#footer').css('width','100%');
//	$('#contenido').css('overflow','auto');
	// PARTE VERTICAL
	// los datos originales son margin left 65 + contenido   (todos en px)
/*	alert(w);*/
}
// leeresto pone en <contenido> lo que se va a mostrar en la web
function leeresto(elque){
	//QUITO TODOS DE SER VISIBLES
   	 jQuery('.contenido').css('display', 'none'); // esto no acaba de funcionar para slideshow, asi que para el siguo haciendo lo mismo de antes
   	 jQuery('#slideshow').css('display', 'none');
	 // MUESTRO EL QUE HAN PULSADO
	 jQuery('#'+elque).css('display', 'block');
}
function TraerContenido(este)
{
	window.location.href+="?p="+este; 
}
function ANTERIORTraerContenido(este)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
		document.getElementById("contenido").innerHTML=xmlhttp.responseText;
		}
	  }
	xmlhttp.open("GET","http://localhost/"+este,true);
	xmlhttp.send();
}




function recargar() {
	var reg = /l$/; // recien llegado
	if(reg.test(window.location.href))
	{
//		window.location.href +="?";
		// escribir el contenedor
//		alert("sñdf");
	}
	//~ alert("3232");
  document.open();
  //~ document.write('<p>What ever you want to write<\/p>');
  //~ document.write('<p>More stuff you want to write<\/p>');
  document.close();
};
