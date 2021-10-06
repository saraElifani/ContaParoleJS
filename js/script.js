const textarea = document.querySelector("textarea");
//campo di testo che si ridimnsiona in automatico
textarea.addEventListener("keyup", e => {
    textarea.style.height = "63px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = (scHeight) + "px";
    //prendo valore della frase in input
    let fraseInput = document.getElementById("textarea").value;
    let listaParole = document.getElementById("container_items");
    //elimino punteggiatura
    let punctuationless = fraseInput.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    //trasformo tutto in minuscolo
    let lowerCase = punctuationless.toLowerCase();
    //separo frase in parole
    let finalString = lowerCase.split(" ");
    //creo oggetto js
    let newArray = {};
    for (var element of finalString) {
        if (typeof newArray[element] === 'undefined' || newArray[element] === null) {
            newArray[element] = 1;
        } else {
            newArray[element] += 1;
        }
    }
    //converto oggetto in array per ordinarlo
    let sortable = [];
    for (var element in newArray) {
        sortable.push([element, newArray[element]]);
    }
    //ordino in modo decrescente
    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });
    //stampo risultati
    let listItem = "";
    for (var element in sortable) {
        listItem += "<li>" + sortable[element] + "</li>";
    }
    listaParole.innerHTML = listItem;

});

