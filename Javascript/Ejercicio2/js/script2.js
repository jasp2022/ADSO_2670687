/* Dado el sueldo de un empleado
imprimir en una alerta el nuevo sueldo
del empleado si tuvo un aumento del 10% */

const sueldo = prompt("Ingrese el valor del sueldo");
const psueldo= 10/100;
const nsueldo = parseInt(sueldo) + parseInt(sueldo*psueldo);
alert("el nuevo sueldo con el aumento es: "+nsueldo);

