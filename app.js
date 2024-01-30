//se trata de una variable que contiene un objeto con metodos
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;


//se realiza la implementación de una funciona para asignar texto a las etiquetas
function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);*/
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else
        //El usuario no acertó 
        {
        if (numeroDeUsuario > numeroSecreto){
           asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
           asignarTextoElemento('p','El numero secreto es mayor');     
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //una posibilidad para limpiar es utilizar querySelecto con el id
    /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';*/
    //sino otra forma mas reducida es la siguiente
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto(params) {
    let numeroGenerado =  Math.floor((Math.random()*numeroMaximo))+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length==numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
    }
    else {
        // si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();//ejemplo de recursividad ya que la función se llama a si misma
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del uno al ${numeroMaximo}`);     
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar menasaje de intervalo de numeros
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}
//llamo a la función con los parametros
//asignarTextoElemento('h1','Juego del número secreto!');
//asignarTextoElemento('p','Indica un número del uno al 10');

//otra forma es invocando a la función
condicionesIniciales();