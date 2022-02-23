let qualTriangulo = function (x: number, y: number, z: number) {
  if (x == y && x == z) {
      return "Equilátero"
  } else if (x == y || y == z || z == x) {
      return "Isósceles";
  } else {
      return "Escaleno";
  }
}
console.log(qualTriangulo(5, 5, 5));
console.log(qualTriangulo(5, 5, 4));
console.log(qualTriangulo(5, 2, 4)); 