/**Ciclos/Bucles/Iteraciones**/

//¿Qué es un ciclo y para que sirve?

//Los ciclos son herramientas que nos permiten repetir un bloque de instrucciones cierta cantidad de veces (y que sea controlado por el programador)

//1)ciclos por conteo: va a ir sumando una unidad por cada vuelta y cuando llega a un cierto tope  que le demarcamos deja de iterar (for) 

//2) ciclos condicionales: va a iterar hasta que se cumpla la condición (while, do while)

/* CICLO FOR */
//*LO VAMOS A USAR CUANDO SE LA CANTIDAD DE VECES O REPETICIONES QUE DEBE TENER MI CÓDIGO

//Sintaxis:

/*for (desde ; hasta ; actualización){
    código de ejecución
}*/

//Ejemplo A: quiero mostrar "Hola mundo" por consola
console.log ("Ej A: ")
for( let i=0; i <10; i=i+1){
    console.log("hola mundo");
}

//Ejemplo B: quiero que comience a contar desde 1 e INCLUYA al 10

console.log("ejemplo B:")

for( let i=1; i<=10; i=i+1){
    console.log(i);
}

//Ejemplo C: quiero que cuente desde 10 hasta 0

console.log("ejemplo C:")

for(let i=10; i>=0; i=i-1){
    console.log(i)
}

//Ejemplo D: quiero mostrar por consola los número pares entre 0 y 10

console.log("ejemplo D");

for (let i=0; i<=10; i=i+2){
    console.log(i);
}

//Ejemplo E: pedir una contraseña al usuario hasta que la ingrese correctamente

// console.log("Ejemplo E:");

// let passwordUser=parseInt(prompt("Ingrese su contraseña:"));
// const passwordAuth = 1234;

// for(let i=0; i<2; i++){
//     if(passwordUser===passwordAuth){
//         console.log("Su contraseña es correcta, accede al sistema");
//         break;
//     } else {
//         passwordUser=parseInt(prompt("Su contraseña en incorrecta, intente otra vez"));
//  }
// }

//Ejemplo F: continue=> cuando bajo cierta condición el ciclo saltear una repetición sigue con la próxima. 
//Mostrar números del 0 al 6 salteando los número pares
//módulo: % retorna el resto de una división, si el resto es cero el número es par, de lo contrario es impar.

console.log("Ejemplo F:");

for(let i=0; i<=10; i=i+1){
    if(i%2==0){
        continue;
    }
    console.log(i)
}

//**CICLO WHILE */
//Es un ciclo que se ejecuta mientras la condición evaluada sera verdadera

// alert("ejemplo G:")

// let nombre= prompt("Ingrese un nombre: (para salir ingrese:salir)");

// while (nombre!="salir"){
//     console.log(nombre);
//     nombre=prompt("ingrese un nombre: (para salir ingrese salir)");
// }

//* do while**//
/*la diferencia con el while es que este se ejecuta al menos una vez*/

// alert("Ejemplo H:")
// const passAutorizado =1235;
// let passwordUsuario;

// do{
//     passwordUsuario=prompt("Ingrese su password");
// } while (passwordUsuario!=passAutorizado);

//**Switch */
/*está diseñado para manejar múltiples condiciones sobre la misma variable y después de la condición de la variable se va a ejecutar determinado código*/

let clima = prompt("Ingrese el clima actual en su ciudad");

switch(clima){
    case "lluvia":
        console.log("Quedate mirando Netflix");
        break;
    
    case "nublado":
        console.log("hacete un asado");
        break;
    
    case"frío":
    console.log("anda a dormir");
    break;
    default:
        console.log("anda a aprender climas");
        break;

}
