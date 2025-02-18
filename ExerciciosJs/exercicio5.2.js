console.log(calculadora(10, 5, "+"));
console.log(calculadora(9, 3, "-"));
console.log(calculadora(4, 2, "*"));
console.log(calculadora(10, 5, "/"));
console.log(calculadora(10, 0, "/"));

function calculadora(nA, nB, OP) {
    switch (OP) {
        case "+":
            return(nA + nB);
    
        case "-":

            return(nA - nB);

        case "*":

            return(nA * nB);
        case "/":

            if(nB == 0)
                return null;
            
            return (nA / nB);
        default:
            break;
    }
}