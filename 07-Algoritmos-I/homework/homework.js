'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // 180 / 2 = 90
  // 90 / 2 = 45
  // 45 / 3 = 15
  // 15 / 3 = 5
  // 5 / 5 = 1
  let array = [1]
  let i = 2;
  while (num !==1){
    if(num % i === 0){
      array.push(i);
      num = num / i;
    } else{
      i++
    }
  }
  return array
//--------------------------- lo q estaba intentando
//   let array = []
//   let factor = num
//   let numAux = num
//   while (factor > 1) {
//     numAux = num % 2
//     array.push(numAux)
//     numAux
//   }
//   return array
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var len = array.length;
    
  for (var i = 0; i < len ; i++) {
    for(var j = 0 ; j < len - i - 1; j++){ 
    if (array[j] > array[j + 1]) {
      // swap
      var temp = array[j];
      array[j] = array[j+1];
      array[j + 1] = temp;
    }
   }
  }
  return array;
  
  /* Otra forma de resolverlo
  var flag = true
  while(flag){
    flag = false;
    for (let i=0; i < array.length; i++){
      if(array[i]> array[i+1]){
        var aux = arrau[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        flag = true
      }
    }
  }
  return array
  */

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let n = array.length;
  for (let i = 1; i < n; i++) {
      // Choosing the first element in our unsorted subarray
      let current = array[i];
      // The last element of our sorted subarray
      let j = i-1; // j está siempre en una osición antes que i
      while ((j > -1) && (current < array[j])) {
        array[j+1] = array[j];
          j--;
      }
      array[j+1] = current;
  }
return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // [5, 1, 4, 2, 8]
  // [5, 1, 4, 2, 8]
  //  i
  //     j
  //    min
  // var aux = 

  for(let i = 0; i < array.length; i++){
    //set min to the current iteration of i
    let min = i;
    for(let j = i+1; j < array.length; j++){
      if(array[j] < array[min]){
       min = j;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
