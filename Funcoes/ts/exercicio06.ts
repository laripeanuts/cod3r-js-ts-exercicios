function jurosSimples (capital: number, juros: number, tempo: number): number {
    return  capital + capital * juros * tempo;
}

function jurosComposto (capital: number, juros: number, tempo: number): number {
    const aux: number = parseInt(((1 + juros) ** tempo).toFixed(2));
    return capital + capital * aux;
}

console.log(jurosSimples(1000, 2/100, 12));
console.log(jurosComposto(1000, 2/100, 12));