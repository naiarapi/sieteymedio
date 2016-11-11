       
       
       var contador_jugador=0;
       var contador_ordenador=0;
       
       function ver(){
                  
            var numeroImagenes = 40;
            var numeroAleatorio = Math.floor(Math.random() * numeroImagenes ) + 1;
            var carta = "images/carta" + numeroAleatorio + ".gif";
            document.getElementById("jugador").src = carta;
            var puntosjugador = document.getElementById("puntosjugador");
         
            
            // asigna el valor de la carta aleatoria
            contador_jugador= contador_jugador + valor_carta(numeroAleatorio);
            puntosjugador.innerHTML = contador_jugador;
            
        
            var numeroAleatorio1 = Math.floor(Math.random() * numeroImagenes ) + 1;
            var carta1 = "images/carta" + numeroAleatorio1 + ".gif";
            document.getElementById("ordenador").src = carta1;
            var puntosordenador = document.getElementById("puntosordenador");
            
            contador_ordenador = contador_ordenador + valor_carta(numeroAleatorio1);
            puntosordenador.innerHTML = contador_ordenador;
            
            if(contador_jugador <= 7.5 || contador_ordenador <= 7.5){
                alert("has ganado!");
                
            }
            
            
         }
          
            
        function valor_carta(carta){
            
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
            
            return valor;
            
            
            
        }