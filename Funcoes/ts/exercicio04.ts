// METODO FUNCTION JUNTO

function divisao (dividendo: number, divisor: number = 1):string {
    let resultado = dividendo / divisor;
    let resto = dividendo % divisor;

    return `Divisão: ${resultado}\nResto: ${resto}`;
}

// METODO ARROW FUNCTION SEPARADO
console.log(divisao(10,3));

const dividir = (dividendo: number, divisor: number = 1) => dividendo / divisor;
const resto = (dividendo: number, divisor: number = 1) => dividendo & divisor;

console.log(`Divisão: ${dividir(10, 3)}`);
console.log(`Resto: ${resto(10, 3)}`);