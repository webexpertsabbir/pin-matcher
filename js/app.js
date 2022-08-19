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