window.onload = function(){
    const checkbox = document.querySelector("input[type=checkbox]");
    const proceedButton = document.querySelector("button");

    proceedButton.disabled = true; // disabilita il pulsante all'avvio

    checkbox.onchange = function(){ // evento che si attiva quando lo stato della checkbox cambia
        proceedButton.disabled = !this.checked; // abilita il pulsante se la checkbox è selezionata, altrimenti lo disabilita
    };

    proceedButton.onclick = function(){ // evento che si attiva quando il pulsante viene cliccato
        window.location.href = "https://www.google.com/"; // reindirizza a Google ricordiamoci di cambiarlo
    };
}