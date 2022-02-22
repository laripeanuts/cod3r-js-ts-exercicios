function jurosSimples (capital, juros, tempo) {
    return  capital + capital * juros * tempo;
}

function jurosComposto (capital, juros, tempo) {

    return capital + capital * ((1 + juros) ** tempo).toFixed(2);
}

console.log(jurosSimples(1000, 2/100, 12));
console.log(jurosComposto(1000, 2/100, 12));