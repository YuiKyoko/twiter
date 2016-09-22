window.onload= function(){
	var color=["purple","green","lava"];
	var maximo=["120","130","140"];

	var boton=document.getElementById("boton");
	var area="";
	boton.disabled=true;
	boton.addEventListener("click", function() {
		area=document.getElementById("textS").value;
		caracteres=text.length;
		var nodo=document.createTextNode(area);
		var texto=document.createElement("p");
		texto.appendChild(nodo);
		var lista=document.getElementById("text");
		lista.insertBefore(texto, lista.childNodes[0]);
		document.getElementById("textS").value="";
		document.getElementById("contador").innerHTML=140;
		var hora = document.createTextNode(horaNow());
        var creaHora = document.createElement("p");
        //var creaDiv = document.getElementById("text");
        //creaHora.classList.add("horaActual");
        creaHora.appendChild(hora);
        lista.insertBefore(creaHora, lista.childNodes[1]);

	});
	var textS=document.getElementById("textS");
	textS.addEventListener("keydown", function () {
		boton.disabled=false;
		var limit=140;
		var caracteres=textS.value.length;
		document.getElementById("contador").innerHTML=limit-caracteres;

		if(caracteres >= maximo[0] && caracteres < maximo[1]) {  
        document.getElementById("contador").classList.remove(color[1]);
        document.getElementById("contador").classList.add(color[0]);
    } else if(caracteres >= maximo[1] && caracteres < maximo[2]) {  
        document.getElementById("contador").classList.remove(color[0]);
        document.getElementById("contador").classList.remove(color[2]);
        document.getElementById("contador").classList.add(color[1]); 
    } else if(caracteres >= maximo[2]){
        document.getElementById("contador").classList.remove(color[1]);
        document.getElementById("contador").classList.add(color[2]);
        boton.disabled = true;
    } else {
        for(var i = 0; i < maximo.length-1; i++){
          document.getElementById("contador").classList.remove(color[i]);    
        };
    }      	
	});
	var textarea = document.getElementById("textS");
	textarea.addEventListener("keydown", autosize);       
	function autosize(){
	  var el = this; 
	    el.style.cssText = 'padding:0';
	    el.style.cssText = 'height:' + el.scrollHeight + 'px';
	}

    function horaNow(){
        var d = new Date();
        var hr = d.getHours();
        var min = d.getMinutes();
        if (hr<10){
            hr = "0" +  hr;
        }
        if (min<10){
            min = "0" +  min;
        }
        return (hr + ":" + min);
    } 
	
}
 