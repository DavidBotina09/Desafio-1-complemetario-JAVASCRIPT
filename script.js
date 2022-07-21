let acumulador = 0
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
}




