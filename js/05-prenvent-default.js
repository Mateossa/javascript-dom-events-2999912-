// Bloquear la tecla enter

document.querySelector('.btnPrint').addEventListener("keydown", function(e){
    if (e.key === "Enter") {
        e.preventDefault();
        console.log('Enter bloqueado');
    }
});