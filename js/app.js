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
    const inputTypeField = document.getElementById('input-type-number');
    const previousTypeNumber = inputTypeField.value;
    if(isNaN(number)){
        if(number === 'C'){
            inputTypeField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop()
            const menainDigits = digits.join('');
            inputTypeField.value = menainDigits;
        }
    }
    else{
        
        const newTypeNumber = previousTypeNumber + number;
        inputTypeField.value = newTypeNumber;
    }
})

document.getElementById('varify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const carentPin = displayPinField.value;

    const inputTypeField = document.getElementById('input-type-number');
    const carentType = inputTypeField.value;

    if(carentPin === carentType){
        console.log('Carect pin')
    }
    else{
        console.log('apner pin thik noi')
    }
})