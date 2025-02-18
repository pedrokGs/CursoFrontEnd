calculaMedia(10, 3, 5);
calculaMedia(5, 4, 5);
calculaMedia(7, 9, 8);

function calculaMedia(n1, n2, n3) {
    if (((n1 + n2+ n3)/3)>=7)
        console.log("Aprovado");
    else
        console.log("Reprovado");
}