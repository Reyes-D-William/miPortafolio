document.addEventListener("focusin", (evento) => {
    let prueba = evento.target;
    console.log(prueba);
    console.log(prueba.parentElement)

    prueba.addEventListener("focusout", () => {
        console.log(prueba.validity);
        if (!prueba.validity.valid) {
            prueba.parentElement.querySelector(".input-message-error").style.visibility = "visible";
        } else {
            prueba.parentElement.querySelector(".input-message-error").style.visibility = "hidden";
        }
    });
});