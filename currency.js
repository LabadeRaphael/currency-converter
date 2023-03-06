 // let onscreen=false;
 exchange=()=>{
    if (userInput.value=="") {
        alertBox.innerHTML=`<div class="alert alert-danger text-center fw-bold">Fill the blank space</div>`
    } else if (userInput.value<1) {
        alertBox.innerHTML=`<div class="alert alert-danger text-center fw-bold">You can't exchange that amount</div>`
    } else {
        alertBox.innerHTML=""
        showCurrency.innerHTML=`$ ${(userInput.value/443.58).toFixed(2)}`
    }
}
clearBtn=()=>{
    if (userInput.value=="") {
        alertBox.innerHTML=`<div class="alert alert-danger text-center fw-bold">Input value first</div>`
    } else {
        showCurrency.innerHTML=""
        userInput.value=""
        console.log(userInput.value);
    }
}
nairaToDolllar=()=>{
    showCurrency1.innerHTML=""
    showCurrency2.innerHTML=""
    document.getElementById('collapseWidthExample').style.display="block"
    document.getElementById('collapseWidthExample1').style.display="none"
    document.getElementById('collapseWidthExample2').style.display="none"
}
euroToPounds=()=>{
    showCurrency.innerHTML=""
    showCurrency1.innerHTML=""
    document.getElementById('collapseWidthExample2').style.display="block"
    document.getElementById('collapseWidthExample1').style.display="none"
    document.getElementById('collapseWidthExample').style.display="none"

}
exchangePounds=()=>{
    if (userInputPounds.value=="") {
        alertBox.innerHTML=`<div class="alert alert-danger text-center fw-bold">Fill the blank space</div>`
    } else if (userInputPounds.value<1) {
        alertBox.innerHTML=`<div class="alert alert-danger text-center fw-bold">You can't exchange that amount</div>`
    } else {
        alertBox.innerHTML=""
        showCurrency2.innerHTML= (userInputPounds.value*0.88).toFixed(2)
    }
}
clearPounds=()=>{
    if (userInputPounds.value=="") {
        alertBox.innerHTML=`<div class="alert alert-danger text-center fw-bold">Input value first</div>`
    } else {
        showCurrency.innerHTML=""
        userInputPounds.value=""
        console.log(userInput.value);
    }
}
nairaToEuro=()=>{
    showCurrency.innerHTML=""
    showCurrency2.innerHTML=""
    document.getElementById('collapseWidthExample1').style.display="block"
    document.getElementById('collapseWidthExample').style.display="none"
    document.getElementById('collapseWidthExample2').style.display="none"
}

exchangeEuro=()=>{
    if (userInputEuro.value=="") {
        alertBox.innerHTML=`<div class="alert alert-danger text-center fw-bold">Fill the blank space</div>`
    } else if (userInputEuro.value<1) {
        alertBox.innerHTML=`<div class="alert alert-danger text-center fw-bold">You can't exchange that amount</div>`
    } else {
        alertBox.innerHTML=""
        showCurrency1.innerHTML= (userInputEuro.value/491.96).toFixed(2)
    }
}
clearEuro=()=>{
    if (userInputEuro.value=="") {
        alertBox.innerHTML=`<div class="alert alert-danger text-center fw-bold">Input value first</div>`
    } else {
        showCurrency.innerHTML=""
        userInputEuro.value=""
        console.log(userInput.value);
    }
}
