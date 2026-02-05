// Bloquear Números

document.querySelector(".user-name").addEventListener("keydown", function(e){

    if (e.key >= 0 && e.key <= 9) {

        e.preventDefault();
        console.log('Números bloqueados');
    }
});