const form  = document.getElementById('form-html');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = document.getElementById('campo-A');
    const campoB = document.getElementById('campo-B');

    if (campoB.value > campoA.value ) {
        alert("Formulário enviado!");

        campoA.value = '';
        campoB.value = '';
    } else {
        alert("Formulário inválido (Campo B não é maior que campo A)");
    }
})

console.log(form);