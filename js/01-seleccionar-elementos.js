// Existen tres formas más comunes de seleccionar elementos

// Selección de un selector h2
// const heading = document.querySelector('h2')

// Selección de una clase con especificidad
const heading = document.querySelector('.header__texto .no-margin')
// console.log(heading);

// Modificar texto del DOM
heading.textContent = 'New text';

// Agregar una clase
heading.classList.add('new-class');

// Remover clases
heading.classList.remove('no-margin')

// querySelector retorna 0 o 1 elemento

// querySelectorAll me retorna todos las etiquetas o clases que concuerden
// const link = document.querySelectorAll('a');

// Acceder al primer a
// const link = document.querySelectorAll('.navegacion a');
// console.log(link);


const link = document.querySelectorAll('.navegacion a');
console.log(link[0, 1]);

// Cambiar el contenido del link
link[1].textContent = 'Nuevo texto del link';

// Modificar el enlace del anker
link[0].href = 'https://ricoprogramar.com';

// Agregar una clase al link o enlace
link[0].classList.add('new-class');

// Remover clase


link[0].classList.remove('navegacion__enlace');

//==================================================

const link2 = document.getElementById('heading');

console.log(link2);