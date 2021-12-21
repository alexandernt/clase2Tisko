let currentMoney = 5000;


// ---------------- Explication ----------------------------
//Algoritmo: "Calcula la cantidad de dinero disponible en mi cuenta"

/*
1) Muestra mensaje de bienvenida
2) Le pide la cantidad a retirar con condiciones
3) Aparece checkbox para aceptar la transaccion, denegarlo o bien escribir hola con un mensaje secreto en consola. Condiciones, si, no, hola
4) Pregunta por donación entre 10 y 50 $. Si está dentro de este valor, se acredita transacción con mensaje en alert. 
*/

// ----------------------- Initial code --------------------

alert(`You have $${currentMoney} USD available in your account.`);
let moneyRetire = prompt('How much money do you want to withdraw from your account?'); 
let moneyRetireNum = parseInt(moneyRetire);


/* ----------------------- Block - Conditions ----------------------- */

if (moneyRetireNum > 5000) {
    alert(`You have only $${currentMoney} USD 🤓. Please, select a smaller amount.`)
} else if (moneyRetireNum <=0){
    alert('You cannot withdraw less than 1USD')
} else {
    let checkbox = prompt(` Do you want to withdraw ${moneyRetireNum} from your account? Please, write: "Yes", "No" or "Hola" (Hola for a secret message)` );
    if (checkbox == "Hola"){
        console.log(`${checkbox} extraño. Esto es un mensaje en español!`);
        alert("You will need to do all the transaction again!")
    } else if (checkbox == "Yes") {
        let donationNum = prompt("We would like you to donate extra money for mental health organization. If you are agree, please type the number to donate. If you are not agree select 0");
        let donationNumParsed = parseInt(donationNum);
        if ((donationNumParsed >= 10) && (donationNumParsed <=50)) {
            alert(`😍😍Thanks for donation! We will discount extra ${donationNumParsed} from your account. 
            Your transaction has been successful`);
        } else {
            alert("We only accept between $10 and $50 USD for donation. POLICIES! 😤😤")
        };
    } else{
        alert("We couldn't finish the transaction.💩")
    };
    
};