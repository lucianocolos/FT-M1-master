'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  // definición de corte: 1! = 1, 0! = 0, <0 = 0 
  // funcion recursiva
  // n! = n * (n-1) * (n-2) ... * 1 * 1
  if (n < 0) { return 0}
  else if (n === 1 || n === 0) { return 1}
  return nFactorial(n-1) * n
}

function nFibonacci(n) {
  // Formula de Fib: Fib(n) = Fib(n-1) + Fib(n-2)
  // Definición de corte: Fib(0)= 0, Fib(1)= 1
  if (n < 0) { return 0}
  else if (n === 0) { return 0}
  else if (n === 1) { return 1}
  return nFibonacci(n-1) + nFibonacci(n-2)
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.data = [];
}

Queue.prototype.enqueue = function(value) {
  this.data.push(value);
  // another way to write the .push() => this.data = [...this.data, value]
}
Queue.prototype.dequeue = function(value) {
  return this.data.shift(value);
  // another way to write the shift() 
  // const[result, ...rest] = this.data; // rest operator
  // this.data = rest;
  // return result;
}
Queue.prototype.size = function() {
  return this.data.length;
}

// Otra forma de pensarlo #1
// this.array = [];
//   this.enqueue = function() {
//     this.array.push();
//   }
//   this.dequeue = function() {
//   }
//   this.size = function() {
//     this.array.length
//   }
//   return array

// Otra forma de pensarlo #2
// class Support {
//   constructor (){
//     this.support = []
//   }
//   enqueue(){
//     this.Support.push();
//   }
//   enqueue(){
//     this.Support.shift();
//   } 
//   size (){
//     this.Support.length();
//   }
// }
// let Queue = new Support



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
