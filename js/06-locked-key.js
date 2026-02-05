// bloqueo de teclas 

const keyslocked = ["a", "A", "b", "B"];

document.querySelectorAll(".campo__field").forEach(field=> {

    field.addEventListener("keydown", function(e){
        if(keyslocked.includes(e.key)){
            e.preventDefault();
            console.log(`Tecla ${e.key} bloqueada`);
        };
    });

});