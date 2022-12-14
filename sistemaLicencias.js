let edad = parseInt(process.argv[2])
let cantidadPago = parseFloat(process.argv[3])

let mayorEdad = edad >= 18
console.log(mayorEdad)
let pago = cantidadPago == 30
let pagoExtra = cantidadPago == 200
console.log(pago)
console.log(pagoExtra)

let pudeConseguirLicencia = (pagoExtra || mayorEdad) && pago 

if(!pago){
    console.log("No puede conseguir la licencia, porque no realizo el pago")
}else if(!mayorEdad){
    if(pagoExtra){
        console.log("Puede conseguir la licencia aunque sea menor de edad")
    }else{
        console.log("Si pago, pero debe pagar extra porque es menor de edad")
    }
}else{
    console.log("Puede conseguir la licencia")
}