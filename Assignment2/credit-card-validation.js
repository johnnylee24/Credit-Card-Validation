


// Use luhn algorithm for credit card validation

const luhnCheck = newFunction()
function newFunction() {
    return cardNum => {
        let arr = (cardNum + '')
            .split("")
            .reverse()
            .map(x => parseInt(x));
        let lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce((acc, val, i) => 
        (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
        sum += lastDigit;
        return sum % 10 === 0;
    };
}
// Call the function luhn algorithm above and then get the id from html input,
// Check it input Valid or not.
function check(){
if(luhnCheck(((document.getElementById("cardNumber").value).replace(/\D+/g,""))) == true){
    document.getElementById("num2").innerHTML = "Good"; 
  }
else{
    document.getElementById("num2").innerHTML = "Not A valid Credit Card"; 
}
}

function CreditCard(event) {
   //on keyup, check for backspace to skip processing
   var code = (event.which) ? event.which : event.keyCode;
   if(code != 8)
       formatCreditCard();
   else{
       //trim whitespace from end; trimEnd() doesn't work in IE
       document.getElementById("cardNumber").value = document.getElementById("cardNumber").value.replace(/\s+$/, '');
   }
//   Use RegExp for credit card TYPE validation (VISA AND MASTER)
    var EXP = new RegExp("(^4[0-9])"); 
    var EXP2 = new RegExp("(^5[1-5][0-9])")
    if(EXP.test(document.frm.carte.value)){
       document.getElementById("num").innerHTML="<img src='Visa-icon.png' width='60' height='60'>"; 
   }
  else if(EXP2.test(document.frm.carte.value)){
               document.getElementById("num").innerHTML="<img src='master-card-icon-256.png' width='60' he^4[0-9]ight='60'>";  
    }


   else{
       document.getElementById("num").innerHTML = "<img src='creditcard-solid.png' width='60' height='60'>"; 

   }

}


function formatCreditCard() {
    var cField = document.getElementById("cardNumber");
    //remove all non-numeric characters
    var realNumber = cField.value.replace(/\D/g,'');
    var newNumber = "";
    for(var x = 1; x <= realNumber.length; x++){
        //make sure input is a digit
        if (isNumeric(realNumber.charAt(x-1)))
            newNumber += realNumber.charAt(x-1);
        //add space every 4 numeric digits
        if(x % 4 == 0 && x > 0 && x < 15)
            newNumber += " ";
    }
    cField.value = newNumber;
 }
 
 function isNumeric(char){
    return('0123456789'.indexOf(char) !== -1);
    
 }














