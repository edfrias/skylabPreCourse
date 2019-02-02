## **Mini-Proyecto del [tema 1](../tema1.md)>**

### Calculator! ➗➕

Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran).
El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean números.

-   Si el usuario introduce un solo numero, deberá mostrar **SOLO** su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
-   Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

```js
// Output
results = [num1 + num2 = resultSum, num1 - num2 = resultRest, ...]
```

**PRO.**

Podrías hacer que le calculadora relizara operaciones sean cuales sean el numero de argumentos pasados a la funcion?

[Arguments MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

```js
function sum() {
    var acc = 0;

    for (num in arguments) {
        console.log(num);

        acc += arguments[num];
    }

    return acc;
}

sum(2, 3, 4); // acc = 9
```

Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación, volviendo a almacenar más resultados y mostrándolos.

```js
calculator(n1,n2);

//Output => sum, subs, mult, div...
prompt("New numbers? y/n")
    Case "y" => calculator(n1,n2)
                //Output => sum1, subs1, mult1, div1, sum2, subs2, mult2, div2...
    Case "n" => "Bye!"
```