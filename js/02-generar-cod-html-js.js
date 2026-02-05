// Crear un nuevo link

// Las etiquetas las creamos en mayúscula y sin apertura y cierre
const newLink = document.createElement('A')
console.log(newLink);

// Agregar el href
newLink.href = 'https://www.youtube.com/';

// Agregar un texto
newLink.textContent ='A New Link'

// Agregar una clase
newLink.classList.add('navegacion__enlace');

// Agregarlo al documento
const navigation = document.querySelector('.navegacion')

navigation.appendChild(newLink);

