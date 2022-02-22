function maiorOuIgual (a: number, b: any):boolean{
  if(a >= b){
    return true;
  }
  return false;
}

console.log(maiorOuIgual(0, 0)) // retornará true
console.log(maiorOuIgual(2, 10)) // retornará false
console.log(maiorOuIgual(5, 1)) // retornará true
