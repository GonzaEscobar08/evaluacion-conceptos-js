// //Ejercicio a
// let nombre = prompt("Ingrese su nombre: ")
// document.write(`Bienvenido ${nombre}`)
// // Ejercicio c
// let nro1 = prompt("Ingrese un numero A: ")
// let nro2 = prompt("Ingrese un numero B: ")
// if (nro1>nro2) {
//     alert(`El numero A(${nro1}) es mayor`)
// }
// else{
//     alert(`El numero B(${nro2}) es mayor`)
// }
// //Ejercicio d
// let a = prompt("Ingrese un numero A: ")
// let b = prompt("Ingrese un numero B: ")
// let c = prompt("Ingrese un numero C: ")
// if (a == b && a == c && b == c){
//     document.write("Los 3 numeros son iguales")
// }
// else{
//     document.write("Los 3 numeros no son iguales")
// }
// //Ejercicio f 
// let peso = parseInt(prompt("Ingrese su peso en Kg: "))
// let altura = parseFloat(prompt("Ingrese su altura en metros: "))
// let indice = peso/(altura^2)
// if (indice < 18.5 ){
//     alert(`Bajo Peso ${indice}`)
// }
// else if(18.6 < indice < 24.9){
//     alert(`Normal ${indice}`)
// }
// else if(25 < indice < 29.9){
//     alert(`Sobrepeso ${indice}`)
// }
// else if( indice > 30){
//     alert(`Obesidad ${indice}`)
// }
// //Ejercicio 4
// let valor=0;

// while(valor != 1){
//     valor = parseInt(prompt("Ingrese un valor numero"));
//     if(isNaN(valor)){
//         console.log("INGRESE UN VALOR NUMERICO!");
//         valor = 0;
//     }else{
//         console.log("EL VALOR INGRESADO ES UN NUMERO.");
//         valor = 1;
//     }
// }
//Ejercicio 5
// let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
// for (let i=0;i<dias.length;i++){
//     if(dias[i] === "Sabado" || dias[i] === "Domingo"){
//         alert(`${dias[i]} - Fin de semana!`)
//     }
//     else{
//         alert(dias[i])
//     }

// }
// Ejercicio 6 
let carrito = []
let art = true
let i = 0
let total = 0
while(art){
    let articulo = prompt("Ingrese articulo: ")
    
    if(articulo != 0){
        carrito[i] = articulo
        i++
        let costo = prompt("Ingrese monto producto: ")
        let cantidad = prompt("Cantidad de articulos: ")
        let precio = costo * cantidad
        total = total + precio
    }
    else{
        art = false
    }
}
console.log(carrito)
document.write(`FACTURA A - Número XXXXXXX-XXXXXXX-X <br> Items: <br> -${carrito} <br> Total a facturar: $${total}`)
console.log(total)
