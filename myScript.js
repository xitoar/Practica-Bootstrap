const ticketBoton = document.getElementById("resumen");
const ticketReset =document.getElementById("borrar");
const ticketResultado = document.getElementById("resultado");
const ticketCant = document.getElementById("inputCantidad");
const ticketSelec = document.getElementById("inputState");




function calcular(){
    switch(ticketSelec.value){
        case "Estudiante" :
        
        ticketResultado.textContent = ticketResultado.textContent + (ticketCant.value * (200 -(200 * 0.8)));
        break;
        case "Trainee" :
        
        ticketResultado.textContent = ticketResultado.textContent + (200 * ticketCant.value * 0.5);
        break;
        case "Junior" :
        
        ticketResultado.textContent = ticketResultado.textContent + ( ticketCant.value * (200 -(200 * 0.15)));
        break;
    }
}

function borrar(){
    ticketResultado.textContent = "Total a Pagar: $";
}


ticketBoton.addEventListener("click", calcular);
ticketReset.addEventListener("click", borrar)