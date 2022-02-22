enum Meses {
  janeiro = 1,
  fevereiro = 2,
  março = 3,
  abril = 4,
  maio = 5,
  junho = 6,
  julho = 7,
  agosto = 8,
  setembro = 9,
  outubro = 10,
  novembro = 11,
  dezembro = 12,
}

function numeroMes(num: number):string {
  if(num > 0 && num < 13) {
    let mes = Meses[num]
    return mes;
  }
  return "Apenas valores de 1 a 12"
}

console.log(numeroMes(1)); // retornará "janeiro" 
console.log(numeroMes(4)); // retornará "abril" 
console.log(numeroMes(0)); // retornará "Apenas valores de 1 a 12" 