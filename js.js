       //variables globales para el juego
       var contador_jugador=0;
       var contador_ordenador=0;
       var btnReiniciar = document.getElementById("boton-comenzar");
       var div = document.getElementsByTagName("div");
       var resultado= div[0];
       var numeroImagenes = 40;
       
       function ver(){
           
           //cartas aleatorias 
            var numeroAleatorio = Math.floor(Math.random() * numeroImagenes ) + 1;
            var carta = "images/carta" + numeroAleatorio + ".gif";
            
            //colocacion de las cartas aleatorias
            document.getElementById("jugador").src = carta;
            //colocacion de los puntos
            var puntosjugador = document.getElementById("puntosjugador");
         
            // asigna el valor de la carta aleatoria jugador
            contador_jugador= contador_jugador + valor_carta(numeroAleatorio);
            puntosjugador.innerHTML = contador_jugador;
            
            //si se pasa del 7.5 sacando cartas o si sale igual a 7.5
            if(contador_jugador > 7.5){
                resultado.innerHTML = "Has perdido! Vuelva a intentarlo";
            }else if (contador_jugador == 7.5){
                resultado.innerHTML = "Enhorabuena! Has ganado!";
            }
         }
         
        function sacar_ordenador(){
            
            //cartas aleatorias
            var numeroAleatorio1 = Math.floor(Math.random() * numeroImagenes ) + 1;
            var carta1 = "images/carta" + numeroAleatorio1 + ".gif";
            
            //colocacion de las cartas aleatorias
            document.getElementById("ordenador").src = carta1;
            //colocacion de los puntos
            var puntosordenador = document.getElementById("puntosordenador");
            
            // asigna el valor de la carta aleatoria ordenador
            contador_ordenador = contador_ordenador + valor_carta(numeroAleatorio1);
            puntosordenador.innerHTML = contador_ordenador;
        } 
            
        function valor_carta(carta){
            
            //establecer el valor a cada carta segun la imagen
            var valor;
            
            if(carta >= 1 && carta <=4){
                valor = 1;
            }else if(carta >= 5 && carta <= 8){
                valor = 2;
            }else if (carta >= 9 && carta <= 12){    
                valor = 3;
            }else if (carta >= 13 && carta <= 16){    
                valor = 4;  
            }else if (carta >= 17 && carta <= 20){    
                valor = 5; 
            }else if (carta >= 21 && carta <= 24){    
                valor = 6;  
            }else if (carta >= 25 && carta <= 28){    
                valor = 7; 
            }else if (carta >= 29 && carta <= 32){    
                valor = 0.5; 
            }else if (carta >= 33 && carta <= 36){    
                valor = 0.5;     
            }else if (carta >= 37 && carta <= 40){    
                valor = 0.5; 
            }
            
            //devolver el valor de la carta aleatoria salida
            return valor;
        }
      
        function plantar(){
             
             //opcion de plantarse si es menor de 7.5   
             if(contador_jugador < 7.5){
                 resultado.innerHTML = "Te has plantado";
             }
             
             //solo una unica vez puede plantarse y no puede volver a jugar. Debe de Iniciar una nueva partida
             document.getElementById("jugador").onclick = function(){
                 resultado.innerHTML = "No puedes jugar mas! Iniciar una nueva partida!";
             }
             
             //mientras el contador del ordenador sea menor 7.5 llama a la funcion sacar_ordenador
             while(contador_ordenador < 7.5){
                    sacar_ordenador();
             }

            //llama a la funcion ganadores 
            ganadores(); 
        }     
       
        function ganadores(){
            
         //establece cuando gana y pierde el jugador    
         if(contador_ordenador > contador_jugador){
             resultado.innerHTML = "Has ganado";
           }else if(contador_ordenador < contador_jugador){
              resultado.innerHTML = "Has perdido"; 
           }else if (contador_ordenador == 7.5){
               resultado.innerHTML = "Has perdido";
           }
        }    
            
         //reinicia la pagina cuando clicka en el boton Nueva Partida    
         btnReiniciar.onclick = function(){
              window.location.reload(true);
        } 
        
