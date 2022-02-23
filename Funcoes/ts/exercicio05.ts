function formatarValorDecimal(valorDecimal: number): string{
    return valorDecimal.toFixed(2).toString().replace(".", ",");
}

console.log(`Valor em reais: ${formatarValorDecimal(10.72 + 0.15)}`);