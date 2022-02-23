function op (a: number, b: number):string {
    let soma: number = a + b;
    let sub: number = a - b;
    let mult: number = a * b;
    let div: number = a / b;
    return `Soma: ${soma} Subtração: ${sub} Multiplição: ${mult} Divisão: ${div}`
}

console.log(op(14, 7));