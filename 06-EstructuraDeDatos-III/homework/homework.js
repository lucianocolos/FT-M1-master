"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
// left: los numeros menos a value
// right: los numeros mayores a value

// se aplica sobre tree.insert()
BinarySearchTree.prototype.size = function() {
  if(this.left === null && this.right === null){ return 1}
  if(this.left === null && this.right !== null){ return 1 + this.right.size()}
  if(this.left !== null && this.right === null){ return 1 + this.left.size()}
  if(this.left !== null && this.right !== null){ return 1 + this.left.size() + this.right.size()}
}

BinarySearchTree.prototype.insert = function(value) {
  if(this.value > value){
    //izquierda
     if(this.left === null){
       this.left = new BinarySearchTree(value)
     } else{
       this.left.insert(value);
     }
  } else if(this.value < value){
    // derecha
    if(this.right === null){
      this.right = new BinarySearchTree(value);
    } else{
      this.right.insert(value);
    }
  }
}
// para testear sobre consola usando node.js nombreArchivo
// let binarytree = new BinarySearchTree(20);
// console.log(binarytree)
// binarytree.insert(12);
// console.log(binarytree)
// binarytree.insert(11);
// console.log(binarytree)

BinarySearchTree.prototype.contains = function(value) {
  //tengo que devolver un booleano
  //true si el valor está en el tree, false sino
  if(value === this.value) {return true}
  if(value > this.value){
    //voy a ala derecha
    if(this.right ===null) {return false;}
    else {return this.right.contains(value)}
  }
  if(value < this.value){
    //voy a a la izq
    if(this.left ===null) {return false;}
    else {return this.left.contains(value)}
  }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
  if(order === "pre-order"){
    // root- left - right
    cb(this.value);
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }
  else if(order === "post-order"){
    // left - right - root
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
  else {
    // left - root - right
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);    
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {
  // breadthFirstForEach(cb)
  // let cb = cb;
  // let array = []
  // breadthFirstForEach(cb, array)
  // let cb = cb;
  // let array = array
  if(this.left !== null){ 
    array.push(this.left);
  }
  if(this.right !== null){ 
    array.push(this.right);
  }
  cb(this.value);
  if (array.length > 0){ 
    array.shift().breadthFirstForEach(cb, array);
  }

}


//-------------------------------------------------------
/* Esto es lo que hice con Martin
// el size funciona
BinarySearchTree.prototype.size = function (){ 
  // si no tiene hijos
  if (!this.left && !this.right) {return 1};
  // si tiene sólo un hijo
  if(!this.left) {return 1 + this.right.size()};
  if(!this.right) {return 1 + this.left.size()};
  // caso default
  return 1 + this.left.size() + this.right.size();
}
BinarySearchTree.prototype.insert = function(value){
  if (value > this.value){
    if(!this.right){
      this.right = new BinarySearchTree(value);
    } else{
      this.right.insert(value)
    }
  } 
  else{
    if(!this.left){
      this.left = new BinarySearchTree(value);
    } else{
      this.left.insert(value)
    }
  }
}
BinarySearchTree.prototype.contains = function(value){
  // caso de corte
  // lo encuentra en la primera
  if (value === this.value) {return true}
  // comparamos
  if (value > this.value){ // se va a la derecha
    if(!this.right) {return false}
    // recursión
    return this.right.contains(value);
  } else {  // se va a la izquierda
    if(!this.left) {return false}
    // recursión
    return this.left.contains(value);
  }
}
  BinarySearchTree.prototype.depthFirstForEach = function (cb, order){
    if(order === "in-order" || !order){
      // izquierda - nodo - derecha
      this.left && this.left.depthFirstForEach(cb, order); // si this.left es false, no va a ejecutar la siguiente declaración
      cb(this.value)
      this.right && this.right.depthFirstForEach(cb, order);
    }
    if(order === "pre-order"){
      // nodo - izquierda - derecha
      cb(this.value)
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
    } else{
      // post-order
      // izquierda - derecha - nodo
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value)
    }
  }
BinarySearchTree.prototype.breadthFirstForEach = function (cb){
  if(!arr){
    let arr = [];
  }
  cb(this.value)
  this.left && arr.push(this.left);
  this.right && arr.push(this.right);
  arr.length && arr.shift().breadthFirstForEach(cb, arr);
}
*/

//-------------------------------------------------------
/* Esto es lo que yo estaba haciendo
function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function (){
  let node = this.root
    if (node == null) {
      return 0;
    } else {
      return this.size(node.left) + 1 + this.size(node.right);
    }
}
*/
// BinarySearchTree.prototype.size = function (node){
//   if (node.root) {
//     return 1 + sizeHelper(node.left) + sizeHelper(node.right);
// }
// return 0;
// }
// BinarySearchTree.prototype.size = function(value) {
//   if(this.value === null){
//     this.size = 0;
//   };
//   return this.size;
//  };
/*
BinarySearchTree.prototype.insert = function(value){
  let node = new Node(value);
  // let bst = new BinarySearchTree();
  if(!this.root) {
    this.root = node; 
  } 
  else {
    let current = this.root;    
    while(current){       
      if(node.value < current.value){       
        if(!current.left){
          current.left = node;           
          break;         
        }
        current = current.left;         
      }
      else if(node.value > current.value){
        if(!current.right){
          current.right = node;
          break;
        }
        current = current.right;
        }
      else {
        break;
        }
      }
    }
    return this
    // node.value = value
    // return node.value;
  };

BinarySearchTree.prototype.contains = function(value){
  let current = this.root;
  while(current){
    if(value === current.value){
      return true;}
    if(value < current.value){
      current = current.left;}
    if(value > current.value){
      current = current.right;}
  }
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (dps){
if(dps == "post-order"){

}
else if(dps == "pre-order"){

}
else {

}
}
BinarySearchTree.prototype.breadthFirstForEach = function (){}
*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
