(function(){
        //declaracion variables
     	var contadorMin=0;
        var contadorMili=0;
        var contadorSegun=0;
        var contadorHora=0;
        var estado=false;
        var milih3=document.querySelector("#milisegundos h3");
        var segunh3=document.querySelector("#segundos h3");
        var minh3=document.querySelector("#minutos h3");
        var horah3=document.querySelector("#hora h3");
        var mili;
        var comenzar=document.querySelector("#start");
        var reiniciar=document.querySelector("#reset");
        var marca=document.querySelector("#marca");
        var parcial=document.querySelector("#parciales");
        var vueltas=0;

        //controlar cronometro--->start stop
        start.addEventListener("click", function(){
                 if (estado==false){
                            //llamar funcion arrancar 
                            mili=setInterval(arrancar,100);
                            reiniciar.style.visibility="hidden";
                            comenzar.innerHTML="PARAR";
                            marca.style.visibility="visible";
                            estado=true;
                 }else{
                           //si true---->parar cronometro
                 	       clearInterval(mili);
                 	       comenzar.innerHTML="START";
                           reiniciar.style.visibility="visible";
                           marca.style.visibility="hidden";
                 	       estado=false;
                 }
		
        });
        //reiniciar 
        reiniciar.addEventListener("click", function(){

                           clearInterval(mili);
                           contadorMin=0;
                           contadorSegun=0;
                           contadorHora=0;
                           contadorMili=0;
                           milih3.innerHTML="0";
                           segunh3.innerHTML="00";
                           minh3.innerHTML="00";
                           horah3.innerHTML="00";
                           parcial.innerHTML="";
                           vueltas=0;
        });
        //parciales
        marca.addEventListener("click", function(){
              parcial.innerHTML+="<h3>Nº"+vueltas+": "+contadorHora+":"+contadorMin+":"+contadorSegun+":"+contadorMili+".</h3>";
              vueltas++;

        });

        //controlar segundos, minutos, horas de cronometro
        function arrancar(){
                            milih3.innerHTML=contadorMili;
                            contadorMili++;
                            if (contadorMili >= 9){
                            	contadorMili=0;
                            	contadorSegun++;
                            	if (contadorSegun<10){
                            		segunh3.innerHTML="0"+contadorSegun;
                            	}else{
                            	segunh3.innerHTML=contadorSegun;
                            	}

                            }
                            if (contadorSegun==60){
                            	contadorMin++;
                            	contadorSegun=0;
                                if (contadorMin<10){
                                    minh3.innerHTML="0"+contadorMin;
                                }else{
                            	    minh3.innerHTML=contadorMin;
                                }

                            }
                            if (contadorMin==60){
                                contadorHora++;
                                contadorMin=0;
                                if (contadorHora<10){
                                    horah3.innerHTML="0"+contadorHora;
                                }else{
                                    horah3.innerHTML=contadorHora;
                                }

                            }                            
        }
})();        
        
    
