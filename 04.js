/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  let strNum = num+"";
  for(let i = 0; i < strNum.length; i++){
    if(strNum.at(i) !== strNum.at((strNum.length-1)-i)) return false;
  }
  return true;
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico