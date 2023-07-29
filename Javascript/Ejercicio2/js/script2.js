/* Ejercicio 2- Dado el sueldo de un empleado
imprimir en una alerta el nuevo sueldo
del empleado si tuvo un aumento del 10% 

const sueldo = prompt("Ingrese el valor del sueldo");
const psueldo= 10/100;
const nsueldo = parseInt(sueldo) + parseInt(sueldo*psueldo);
alert("el nuevo sueldo con el aumento es: "+nsueldo); */

/* Ejercicio 3 - Un vendedor que tiene su sueldo base,
recibe una comision del 30% del total de las ventas 
del mes, el quiere saber cuanto ganara en un mes que
tuvo tres ventas*/

//ejercicio 4


//ejercicio 5 hola

let opcion = prompt("1. suma 2. resta");
let num1=  prompt("dicigite numero 1");
let num2=  prompt("dicigite numero 2");

if (opcion==1){ 
    suma=parseInt(num1)+parseInt(num2);
    alert(suma);
} else 
{ 
    resta=parseInt(num1)+parseInt(num2);
    alert(resta);
}