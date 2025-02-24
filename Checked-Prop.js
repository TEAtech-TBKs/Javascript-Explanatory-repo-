//observe

const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const mastercardBtn = document.getElementById('mastercardBtn');
const paypalBtn = document.getElementById('paypalBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

function mySubmit(){

    if(myCheckBox.checked) {
        subResult.textContent = 'you are Subscribed';
        console.log(myCheckBox)
    }
    else{
        subResult.textContent = 'you are Not Subscribed';
    }
    if(visaBtn.checked){
        paymentResult.textContent = 'Visa Identified'
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = 'Mastercard Identified'
    }
    else if(paypalBtn.checked){
        paymentResult.textContent = 'Paypal Identified'
    }
    else{
        paymentResult.textContent = "you must select a payment method"
    }
}