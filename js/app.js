function getPin(){
    const pin = genaratePin();
    const pinStiring = pin + '';
    if(pinStiring.length == 4){
        return pin;

    }
    else{
        return getPin();
    }
}

function genaratePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

//number click event
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    if(isNaN(number)){
        console.log(number);
    }
    else{
        const inputTypeField = document.getElementById('input-type-number');
        const previousTypeNumber = inputTypeField.value;
        const newTypeNumber = previousTypeNumber + number;
        inputTypeField.value = newTypeNumber;
    }
})