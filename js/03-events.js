// Eventos en JS

// Click del mouse sobre un elemento
// Pulsación de una tecla específica
// Reproducción de un archivo multimedia
// Scroll de mopuse
// Diligencia un formulario

// console.log(1);
// console.log(2);
// console.log(5);

//==================================================

console.log(1);

// Load espera que el JS y los archivos que dependen del html estén listos.
window.addEventListener('load', function(){
    console.log(2);
    console.log('Ya cargó window2');
})

// Otra forma de hacer lo mismo

window.onload = function(){
    console.log(3);
    console.log('Ya cargó window3');
}
console.log(5);

const button = document.querySelector('.btnPrint');

// Evento click
button.addEventListener('click', function(){
    console.log('Función externa');
    window.print();
})

// Evento scroll
window.onscroll = function(){
    console.log('Estoy haciendo scroll...');
}
