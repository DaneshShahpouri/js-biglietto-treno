
//Stampa a schermo il diagramma di flusso

document.write(
    `<div style="width: 90vw">
        <p>Il prezzo del biglietto per te è di:</p>
        <span id="prezzo-container"></span>

        <h2 style="text-align:center">Diagramma di flusso</h2>
        <img src="img/Diagramma.png" alt="diagramma del programma" style="width: 90%;">

    </div>`
)

//Funzione
let user_distance = parseInt(prompt("Indica il numero dei Km che vuoi percorrere in treno"));
let ticket_price = user_distance * 0.21;
let user_eta = parseInt(prompt("Qual è la tua età?"));
let teen_discount;
let old_discount;
let discount_ticket;
let paragraph = document.getElementById("prezzo-container")

if (user_eta <= 18) {

    teen_discount = ticket_price / 100 * 20;
    discount_ticket = ticket_price - teen_discount;

} else if (user_eta >= 65){

    old_discount = ticket_price / 100 * 40;
    discount_ticket = ticket_price - teen_discount;
    
}else{
    discount_ticket = discount_ticket
};

paragraph.innerHTML = discount_ticket.toFixed(2) + " euro";