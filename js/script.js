
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
let paragraph = document.getElementById("prezzo-container");

console.log(user_distance)

if (isNaN(user_distance) || user_distance === null){
    paragraph.innerHTML = "per favore inserisci un numero nel campo della distanza"
}else if(user_distance < 0){
    paragraph.innerHTML = "per favore inserisci un numero superiore allo zero"
}else{

    let ticket_price = user_distance * 0.21;

    let user_eta = prompt("Qual è la tua età?");
    let teen_discount;
    let old_discount;
    let discount_ticket;
    
    while(isNaN(user_eta) || user_eta == "")
    {
        user_eta = prompt("per favore inserisci un numero")
    }
    
    if (user_eta <= 18) {
    
        teen_discount = ticket_price / 100 * 20;
        discount_ticket = ticket_price - teen_discount;
    
    } else if (user_eta >= 65){
    
        old_discount = ticket_price / 100 * 40;
        discount_ticket = ticket_price - old_discount;
        
    }else{
        discount_ticket = ticket_price;
    };
    
    paragraph.innerHTML = discount_ticket.toFixed(2) + " euro";

}
