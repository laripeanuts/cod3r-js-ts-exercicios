function formatarValorDecimal(valorDecimal) {
    valorReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`;
    console.log(valorReais);
}

formatarValorDecimal(0.72 + 0.15);