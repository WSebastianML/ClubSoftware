let mayorEdad = false
let pago = true
let pagoExtra = true
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