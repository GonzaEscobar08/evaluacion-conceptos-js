//Ejercicio a
let nombre = prompt("Ingrese su nombre: ")
document.write(`Bienvenido ${nombre}`)
// Ejercicio c
let nro1 = prompt("Ingrese un numero A: ")
let nro2 = prompt("Ingrese un numero B: ")
if (nro1>nro2) {
    alert(`El numero A(${nro1}) es mayor`)
}
else{
    alert(`El numero B(${nro2}) es mayor`)
}
//Ejercicio d
let a = prompt("Ingrese un numero A: ")
let b = prompt("Ingrese un numero B: ")
let c = prompt("Ingrese un numero C: ")
if (a == b && a == c && b == c){
    document.write("Los 3 numeros son iguales")
}
else{
    document.write("Los 3 numeros no son iguales")
}