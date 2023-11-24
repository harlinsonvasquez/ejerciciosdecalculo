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
}
//12. Determina si un número es un año bisiesto.

let bisiesto=Number.parseInt(prompt("ingrese el año que quiere comprobar si es bisiesto"));
if (bisiesto%4 ==0 || (bisiesto %4==0 && bisiesto%100 !==0) || (bisiesto%100==0 && bisiesto%400==0)){
    console.log("año bisiesto")
}
else{
    console.log("año no bisisesto")
}

//13. Verifica si una persona es mayor de edad (mayor o igual a 18 años)
let edad=Number.parseInt(prompt("ingresa tu edad"));
if(edad>=18){
    console.log("mayor de edad")
}
else{
    console.log("eres menor de edad")
}
//15. Verifica si un número es un cuadrado perfecto.
let num=Number.parseInt(prompt("ingresa un numero para comprobar si es un cuadrado perfecto"))
let raiz=Math.sqrt(num);
if(raiz%1 ==0){
    console.log("el num es un cuadrado perfecto")
}
else{
    console.log("el num no es un cuadrado perfecto")
};

let numFibonacci=Number.parseInt(prompt("ingrese un numero"))


let a=Math.sqrt(5*numFibonacci*numFibonacci+4);
let b=Math.sqrt(5*numFibonacci*numFibonacci-4);

if(a%1==0 || b%1==0){
    console.log(`${numFibonacci} es un numero fibonacci`);
}
else{
    console.log("el numero ingresado no es fibonacci");
}
//Verifica si un número es una potencia de 2.

let numPotencia=Number.parseInt(prompt("ingresa un numero para saber si es potencia de 2"));

if((numPotencia>0) && ((numPotencia & (numPotencia-1))==0)){
    console.log("el numero ingresado es potencia de 2");
}else{
    console.log("no es potencia")
}
//18. Determina si un número es un palíndromo.
 let numPalin=prompt("ingrese un numero para saber si es palindromo");
 let numstring=numPalin.toString();
 let numReverse=numstring.split('').reverse().join('');

 if(numstring===numReverse){
    console.log(`el num ${numPalin} es palindromo ${numReverse}`)
 }
 else{
    console.log("no es palindromo")
 }

//19. Verifica si una cadena de texto contiene la palabra "JavaScript".
let palabra=prompt("ingresa una frase")
palabra=palabra.toLocaleLowerCase();

if (palabra.includes("javascript")){
    console.log(" la frase contiene la palabra javascript")     
}
else{
    console.log(" la frase no incluye la palabra javascript")
}*/
//20. Determina si una cadena tiene más de 10 caracteres.
let longitud=prompt("introduce una cadena de texto para comprobar su longitud")
let numlongitud=longitud.length;
numlongitud=parseInt(numlongitud);

if(numlongitud>10){
    console.log("la cadena tiene mas de 10 caracteres incluyendo espacios")
}
else{
    console.log("la cadena de texto tiene menos de 10 caracteres")
}
