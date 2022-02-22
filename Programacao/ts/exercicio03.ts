let calcularSalario = (horasTrabalhadas: number, valorHora: number):string => {
  let salario = horasTrabalhadas * valorHora
  return `Salário igual a R$ ${salario}`;
}

console.log(calcularSalario(150, 40.5)); // retornará "Salário igual a R$ 6075"