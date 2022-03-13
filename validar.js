let formulario = document.querySelector("#formulario");
console.log(paymentForm);
validar.js.addEventListener("submit", (e) => {
    e.preventDefault();
    let validar = true;
    const form = e.target;

    let soloNumeros = /^[0-9]+$/;
    let checkCvc = /^[0-9]{3,5}$/;
    let soloLetra = /^[a-zA-Z]+$/;

    if (form.card.value === "" || !soloNumeros.test(form.card.value)) {
        validar = false;
        form.card.classList.add("is-invalid")
    }
    if (form.cvc.value === "" || !checkCvc.test(form.Cvc.value)) {
        validar = false;
        form.cvc.classList.add("is-invalid")
    }
    if (form.amount.value === "" || !soloNumeros.test(form.amount.value)) {
        validar = false;
        form.amount.classList.add("is-invalid")
    }

    if (form.firstname.value === "" || !soloLetra.test(form.name.value)) {
        validar = false;
        form.firstname.classList.add("is-invalid")
    }
    if (form.lastname.value === "" || !soloLetra.test(form.lastname.value)) {
        validar = false;
        form.lastname.classList.add("is-invalid")
    }
    if (form.city.value === "" || !soloLetra.test(form.city.value)) {
        validar = false;
        form.city.classList.add("is-invalid")
    }
    if (form.state.value === "" || !soloLetra.test(form.state.value)) {
        validar = false;
        form.state.classList.add("is-invalid")
    }
    if (form.postalcode.value === "" || !soloLetra.test(form.postalcode.value)) {
        validar = false;
        form.postalcode.classList.add("is-invalid")
    }
    if (form.menssage.value === "" || !soloLetra.test(form.menssage.value)) {
        validar = false;
        form.menssage.classList.add("is-invalid")
    }


})