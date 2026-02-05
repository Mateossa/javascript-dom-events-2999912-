// Eventos de los inputs 

// Leer lo que ingresa el usuario

const userName = document.querySelector(".user-name");
const userPhone = document.querySelector(".user-phone");
const userEmail = document.querySelector(".user-email");
const userMessage = document.querySelector(".user-message");

userName.addEventListener("input", function(e){
    // Leer lo que el usuario ingresa
    console.log(e.target.value);
});

userPhone.addEventListener("input", function(e){

    console.log(e.target.value);
});

userEmail.addEventListener("input", function(e){

    console.log(e.target.value);
});

userMessage.addEventListener("input", function(e){

    console.log(e.target.value);
});

// Vamos a hacer refactoring

userName.addEventListener("input", readText);
userPhone.addEventListener("input", readText);
userEmail.addEventListener("input", readText);
userMessage.addEventListener("input", readText);    

function readText(e){
    console.log(e.target.value);
}