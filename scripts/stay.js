function getRoomRate(
when, nights, wantsqueen,  wantsking, wantssuite, hasnone, isSenior, isMilitary
){
    console.log(arguments)
    let roomcost = 0;
    const tax = 0.12;
    let totalcost = roomcost * nights;

    if(wantsqueen){
        roomcost += 250.00 * nights;
    }
    if(wantsking){
        roomcost += 250.00 * nights;
    }
    if(wantssuite){
        roomcost += 350.00 * nights;
    }

    // const checkinDate = new Date(when.value);
    // const month = checkinDate.getMonth();
    // const isPeak = month >= 5 && month <=7;
    // if(isPeak){
    //     if("wantssuite" === roomcost){
    //         rate = 350
    //     }else{
    //         rate = 250
    //     }
    // }else{
    //     if("wantssuite" === roomcost){
    //         rate = 210
    //     }else{
    //         rate = 150
    //     }
    // }

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
    const afterdiscount = roomcost - discount
    const taxAmount = afterdiscount * tax

const grandTotal = afterdiscount + taxAmount
return `
      Original Room Cost: $${roomcost.toFixed(2)}
                Discount:  $${discount.toFixed(2)}
Room Price with Discount:  $${afterdiscount.toFixed(2)}
                     Tax:  $${tax.toFixed(2)}
              Total Cost:  $${grandTotal.toFixed(2)}
`;
}

document.addEventListener("DOMContentLoaded", () => {
    const estimateForm = document.getElementById("estimateForm");
    const checkinDate = document.getElementById("checkinDate");
    const numberOfNights = document.getElementById("numberOfNights");
    const queen = document.getElementById("queen");
    const king = document.getElementById("king");
    const suite = document.getElementById("suite");
    const none = document.getElementById("none");
    const senior = document.getElementById("senior");
    const military = document.getElementById("military");
    // const getPriceQuoteButton = document.getElementById("getPriceQuoteButton");
    const getRoomRateOutput = document.getElementById("getRoomRateOutput");
    function onFormSubmit(event){
        event.preventDefault();
        getRoomRateOutput.innerText = getRoomRate(
            checkinDate.value,
           Number(numberOfNights.value),
            queen.checked,
            king.checked,
            suite.checked,
            none.checked,
            senior.checked,
            military.checked,
        );
    }
    estimateForm.addEventListener("submit", onFormSubmit)

    // getPriceQuoteButton.addEventListener("click", () => {
    //     getRoomRateOutput.innerText = getRoomRate(
    //         checkinDate.value,
    //         numberOfNights.value,
    //         queen.checked,
    //         king.checked,
    //         suite.checked,
    //         none.checked,
    //         senior.checked,
    //         military.checked,
    //     );
    // })
})


// <table>
//     <tr><th>Original Room Cost:</th> <td>$${roomcost.toFixed(2)}</td></tr> 
//     <tr><th>Discount:</th>        <td>$${taxAmount.toFixed(2)}</td></tr>
//     <tr><th>discounted Room Cost:</th>  <td>$${totalDue.toFixed(2)}</td></tr>
//     <tr><th>Tax:</th>  <td>$${tax.toFixed(2)}</td></tr>
//     <tr><th>Total Cost:</th>  <td>$${grandTotal.toFixed(2)}</td></tr>
// </table>
const selectedRoom = document.querySelector('input[name="room"]:checked');