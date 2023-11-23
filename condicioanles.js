/*//punto 1 y 2
let num=Number.parseInt(prompt ("ingresa un numero para saber si es positivo"));

if (num>0){
    console.log("el numero es positivo")
}
else if(num ==0){
    console.log("el nuemro es neutro");
}
else{
    console.log("el nuero es negativo");
}

//punto 3 y 4
let numpar=Number.parseInt(prompt("ingresa un numero para comprobar si es par o impar"));

if(numpar %2 ==0){
    console.log("el numero es par ")
}
else{
    console.log("el numero es impar");

}
//5. Determina si un número es múltiplo de 5

let numMUltiplo=Number.parseInt(prompt("ingresa un numero para saber si es multiplo de 5"));
if (numMUltiplo % 5==0){
    console.log("el numero si es multiplo");
}
else{
    console.log("el numero no es multilplo");
}

//6. Verifica si un número es divisible entre 3.
let numDivisible=Number.parseInt(prompt("ingresa un numero para saber si es divisible de 3"));
if (numMUltiplo % 3==0){
    console.log("el numero si es divisible de 3");
}
else{
    console.log("el numero no divisible");
}

let numMayor=Number.parseInt(prompt("ingresa un numero"));
if(numMayor>100){
    console.log("el numero es mayor a 100");    
}
else{
    console.log("el numero es menor a 100");
}

//8. Verifica si un número es menor que -50.

let numMenor=Number.parseInt(prompt("ingrese un numero "));
if (numMenor< -50){
    console.log("el numero es menor a -50");
}
else{
    console.log("el numero no es menor a -50");
}

//9. Comprueba si un número está en el rango de 20 a 50.
let rangoNum=Number.parseInt(prompt("ingrese un numero para comprobar su rango"));
if(rangoNum>19 && rangoNum <51){
    console.log("el numero esta en el rango permitido 20 a 50");
}
else{
    console.log("numero fuera de rango");
}

//10. Determina si un número es igual a 0.
let numCero=Number.parseInt(prompt("ingrese un numero"));
if(numCero==0){
    console.log("el numero ingresado es cero");

}
else{
    console.log("numero diferente a cero")
}

//11. Verifica si un número es mayor que -10 y menor que 10.
let mayorMenor=Number.parseInt(prompt("ingresa un numero para comprobar si es mayor -10 y menor que 10"));
if (mayorMenor>-10 && mayorMenor<10){
    console.log("numero dentro del rango")
}
else{
    console.log("numero fuera de rango");
}*/
//12. Determina si un número es un año bisiesto.

let bisiesto=Number.parseInt(prompt("ingrese el año que quiere comprobar si es bisiesto"));
if (bisiesto%4 ==0 || (bisiesto %4==0 && bisiesto%100 !==0) || (bisiesto%100==0 && bisiesto%400==0)){
    console.log("año bisiesto")
}
else{
    console.log("año no bisisesto")
}