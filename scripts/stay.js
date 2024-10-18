function getRoomRate(
days, wantsqueen,  wantsking, wantssuite, hasnone, isSenior, isMilitary
){
    const tax = 0.12;
    const senior = 0.1;
    const military = 0.2;
    let discount = 0;
    if(hasnone){
        discount = 0;
    }
    if(isSenior){
        discount += roomcost * senior;
    }
    if(isMilitary){
        discount += roomcost * military;
    }

    let totalcost = roomcost * days;
    let roomcost = 0;
    if(wantsqueen){
        roomcost += 250.00 * days;
    }
    if(wantsking){
        roomcost += 250.00 * days;
    }
    if(wantssuite){
        roomcost += 350.00 * days;
    }

const grandTotal = (totalcost + discount) * tax.toFixed(2)
return `
    Original Room Cost: $${roomcost.toFixed(2)}
`

;
}

document.addEventListener("DOMContentLoaded", () => {
    const checkinDate = document.getElementById("checkinDate");
    const numberOfNights = document.getElementById("numberOfNights");
    const queen = document.getElementById("queen");
    const king = document.getElementById("king");
    const suite = document.getElementById("suite");
    const discount = document.getElementById("discount");
    const getPriceQuoteButton = document.getElementById("getPriceQuoteButton");
    const getRoomRateOutput = document.getElementById("getRoomRateOutput");

    getPriceQuoteButton.addEventListener("click", () => {
        getRoomRateOutput.innerText = getRoomRate(
            checkinDate.value,
            numberOfNights.value,
            queen.checked,
            king.checked,
            suite.checked,
            discount.checked,
        );
    })
})


// <table>
//     <tr><th>Original Room Cost:</th> <td>$${roomcost.toFixed(2)}</td></tr> 
//     <tr><th>Discount:</th>        <td>$${taxAmount.toFixed(2)}</td></tr>
//     <tr><th>discounted Room Cost:</th>  <td>$${totalDue.toFixed(2)}</td></tr>
//     <tr><th>Tax:</th>  <td>$${tax.toFixed(2)}</td></tr>
//     <tr><th>Total Cost:</th>  <td>$${grandTotal.toFixed(2)}</td></tr>
// </table>