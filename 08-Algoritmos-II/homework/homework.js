'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // elige un elemento de forma aleatoria, lo llama pivot
  // coloca a su derecha los > pivote, y a su izq < pivot
  // trabajo con cada sub arreglo, repito el algoritmo
  // llego a que el arreglo tiene dos elementos, o uno, 
  // si tiene dos, los comprara y los alterna

  if (array.length <= 1) {
    return array;
  }
let pivotIndex = Math.floor(Math.random() * array.length)
let pivot = array[pivotIndex]
// let pivot = array[0]
  
  let right = []
  let left = []
  let equal = []

  for (let i = 0; i < array.length; i++) {
    if(array[i] < pivot){
      left.push(array[i]);
    }
    else if(array[i] > pivot){
      right.push(array[i]);
    }
    else{
      equal.push(array[i]);
    }   
  }
  return [
    ...quickSort(left),
    ...equal,
    ...quickSort(right)
  ];

  /* ejecución si
    // let pivot = array[0] & i=1
    pivot = 5
    right = [], left = []
    i=1, 1<5 => left=[1]
    i=2, 4<5 => left=[1, 4]
    i=3, 2<5 => left=[1, 4, 2]
    i=4, 8!<5 => right = [8]
    return quickSort [1, 4, 2]
    pivot = 1
    right1=[],left1=[]
    i=1, 4!<1 => right[4]
    i=2, 2!<1 => right[4, 2]
    return quicksort([]).concat(1, [2,4]) => [1,2,4]

    .concat(5, quicksort(8) ) = [5,8] => [1,2,4].concat([5,8]) => [1,2,4,5,8]

*/
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /* Mi intento
  let arr = array
  let left = arr.slice(0, Math.floor(arr.length / 2))
  let right = arr.slice(Math.floor(arr.length / 2), arr.length)
  return sortedArray;
  */
  const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)

  /// Función auxiliar para mergear
  function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
  }
  
  return merge(mergeSort(left),mergeSort(array))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
