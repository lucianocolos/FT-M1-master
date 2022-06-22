
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; // 1
var a = 5; // undefined
var b = 10; // undefined
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9 - porque en f solo se pasó el valor de b, no su referencia.
} // undefined
c(8,9,10);  // x=1; a=5; b=10; c={x=10; 10; 8; b=8; b=10; x=5; 8; 9}
            // 10 8 8 9
console.log(b); // 10
console.log(x); // 1 -> las x definidas adentro de las funciones está adentro
```

```javascript
console.log(bar); // undefined
console.log(baz); // error - como la variable baz no está definida se corta el resto del programa
foo(); // Hoisting, funciona si no se corta el programa
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony"; // undefined
if(true) {
    var instructor = "Franco";
} // undefined
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony"; // undefined
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})(); // undefined
console.log(instructor); // 'Tony' porque intructor dentro de la función es una variable local
```

```javascript
var instructor = "Tony"; // undefined
let pm = "Franco"; // undefined
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
} // The Flash Reverse Flash
console.log(instructor); // The Flash
console.log(pm); // Reverse Flash
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2 - el único valor false es el 0, siempre pasa el último
2 && 5 // 5
5 || 0 // 5 - el primer operador true ya es suficiente, por eso pasa el primer operador true que encuentre
0 || 5 // 5
[3]+[3]-[10] // 23 - la suma de arrays es concatenación, la resta es de números
3>2>1 // false - porque (3>2) es true y true > 1 es false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
} // undefined

test(); // undefined 2 undefined
```

Y el de este código? :

```javascript
var snack = 'Meow Mix'; // undefined

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
} // undefined

getFood(false); // undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez'; // undefined
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
}; // undefined

console.log(obj.prop.getFullname()); // Aurelio De Rosa undefined

var test = obj.prop.getFullname; // undefined - guarda la función getFullname, que es un método adentro del objeto prop

console.log(test()); // Juan Perez - porque el 'this' de la función getFullname está apuntando al objeto global
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
} // undefined 1 4 undefined 3 2

printing();
```
