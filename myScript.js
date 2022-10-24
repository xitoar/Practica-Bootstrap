const ticketBoton = document.getElementById("resumen");
const ticketReset = document.getElementById("borrar");
const ticketResultado = document.getElementById("resultado");
const ticketCant = document.getElementById("inputCantidad");
const ticketSelec = document.getElementById("inputState");


function calcular() {
    switch (ticketSelec.value) {
        case "Estudiante":
            ticketResultado.textContent = "Total a Pagar: $" + (ticketCant.value * (200 - (200 * 0.8)));
            break;
        case "Trainee":
            ticketResultado.textContent = "Total a Pagar: $" + (200 * ticketCant.value * 0.5);
            break;
        case "Junior":
            ticketResultado.textContent = "Total a Pagar: $" + (ticketCant.value * (200 - (200 * 0.15)));
            break;
        default:
            ticketResultado.textContent = "Total a Pagar: $" + (ticketCant.value * 200); 
    }
}

function borrar() {
    ticketResultado.textContent = "Total a Pagar: $";
}

ticketBoton.addEventListener("click", calcular);
ticketReset.addEventListener("click", borrar)

var forms = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(forms)
    .forEach(function (form) {
        ticketBoton.addEventListener("click", function (event) {
            if (!form.checkValidity()) {
                alert("Verifique los datos cargados")
            }
            form.classList.add('was-validated')
            calcular();
        }, false)
    })