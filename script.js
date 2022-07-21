/*let acumulador = 0
let numeroNotas =parseFloat(prompt("ingrese el numero de notas que desea promediar(maximo 10 notas)"))
if(numeroNotas <= 10){

    for(let i = 1; i <= numeroNotas ; i ++){
        let nota = parseInt(prompt("ingrese una nota"))
        acumulador += nota //acumulador = acumulador + nota
        if(nota > 5 || nota < 1){
            break
        }
    }
    console.log(`el promedio de las notas es ${acumulador / numeroNotas}`)
}*/

let valorBoleta = 5000
let clientes = 0
let edad = 0
do{
    do{
        clientes = parseInt(prompt("cuantos clientes van a ver la pelicula"))
        if(isNaN(clientes)){
            alert("ingresa caracteres validos")
        }
        if(clientes > 5){
            alert("el maximo de clientes por grupo es de 5 personas")
        }
        console.log(clientes)
    }while((isNaN(clientes)) || (clientes > 5))


    for(let i = 0;i < clientes; i ++ ){
            edad = parseInt(prompt("edad de cada cliente"))
        if(isNaN(edad)){
            alert("vuelve a ingresar un caracter validos")
            break
        }
        if(edad < 17){
            alert("la edad estimada para ver las peliculas es de 17 años en adelante")
            break
        }
        console.log(edad)
    }
}while((edad < 17) || (isNaN(edad)))

alert(`el total a pagar es ${valorBoleta * clientes}`)




