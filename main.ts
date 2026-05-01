let izquuerda = 0
let derecha = 0
basic.forever(function(){
    // leer sensores (conectados a pimes analogicos P0 y P1)
    izquierda = pins.analogReadPin(AnalogPin.P0)
    derecha = pins.analogReadPin(AnalogPin.P1)

   // umbarl para distinguir blanco/negro 
   let umbarl = 500

   if(izquierda < umbral && derecha < umbarl) {
    // ambos sabre linea negra avanzar recto motores (100,100)
   } else if (izquierda < umbarl){
       // solo el sensor derecho detecta linea gira a la izquierda
       motores (0,100)
    } else if (derecha < umbarl) {
        // solo el motor derecho detecta la linea gira a  la derecha
        motores (100,0)
    } else {
        // ninguno detecta linea detener motores (0,0)
    }
})  
// funcion para controlar motores conectados a pines P8 y P12
function motores (vell)