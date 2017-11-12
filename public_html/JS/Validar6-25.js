/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load", iniciar, false);

function iniciar() {
    edad = document.getElementById("miedad");
    edad.addEventListener("change", cambiarrango, false);
    document.informacion.addEventListener("invalid", validacion, true);
    document.getElementById("enviar").addEventListener("click", enviar, false);
    document.informacion.addEventListener("input", controlar, false);
}
function cambiarrango() {
    var salida = document.getElementById("rango");
    var calc = edad.value - 20;
    if (calc < 20) {
        calc = 0;
        edad.value = 20;
    }
    salida.innerHTML = calc + ' a ' + edad.value;
}
function validacion(e) {
    var elemento = e.target;
    elemento.style.background = '#FFDDDD';
}
function enviar() {
    var valido = document.informacion.checkValidity();
    if (valido) {
        document.informacion.submit();
    }
}
function controlar(e) {
    var elemento = e.target;
    if (elemento.validity.valid) {
        elemento.style.background = '#FFFFFF';
    } else {
        elemento.style.background = '#FFDDDD';
    }
}
