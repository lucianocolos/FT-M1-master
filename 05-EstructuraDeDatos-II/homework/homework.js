"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._lenght = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value) {
  let newNode = new Node(value); // crea el primer nodo
  let current = this.head; // esta es una variable auxiliar para recorrer la lista porque el head es fijo
  // si está vacía
  if(!current){
    this.head = newNode; // si la lista está vacía, asigna el head al nodo recientemente creado
    this._lenght++;
    return newNode
  }
  // si no está vacía, recorro hasta encontrar el último
  while(current.next !== null){
    current = current.next;
  }
  current.next = newNode; // esto agrega el nodo nuevo al final de la lista
  this._lenght++;
  return newNode
}

LinkedList.prototype.remove = function(value) {
  // si está vacía
  if(!this.head){
    return null
  } 
  if(this.head.next === null){ // caso de si tiene un solo nodo
    let valor = this.head.value;
    this.head = null;
    return valor;
  }
  let current = this.head;
  while(current.next.next !== null){
    current = current.next;
  }
  let valor = current.next.value;
  current.next = null;
  return valor;
//  LISTA= head - 1 - 2- 3 - 4- null
}

LinkedList.prototype.search = function(arg) {
    // si está vacía
  if(this.head == null){
    return null
  } 
  let current = this.head;
  while (current) {
    if (typeof arg === "function") {
      if(arg(current.value)){
        return current.value
      }
    }
    if (current.value === arg) {
      return current.value
    } 
    current = current.next;
    
  }
  return null
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35
  this.contenedores = [];
}

HashTable.prototype.hash = function(value){
  let aux = 0;
  for (let index = 0; index < value.length; index++) {
    aux = aux + value.charCodeAt(index)
  }
  return aux % this.numBuckets
}
HashTable.prototype.set = function(key, value){
  if(typeof key !== "string"){
    throw new TypeError ("Keys must be strings")
  }
  let pos = this.hash(key)
  this.contenedores[pos] = this.contenedores[pos] || [] // si this.contenedores[pos] no está, devuelve un false, y por ende devuelve un []
  this.contenedores[pos].unshift({key: key, value: value})
}
HashTable.prototype.get = function(key){
  let pos = this.hash(key)
  for (let index = 0; index < this.contenedores[pos].length; index++){
    if (this.contenedores[pos][index].key === key){
      return this.contenedores[pos][index].value
    }
  }
  return false;
}
HashTable.prototype.hasKey = function(key){
  let haskey = this.get(key)
  return Boolean(haskey)
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
