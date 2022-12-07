let mayorEdad = false
let pago = true
let pagoExtra = true
//let acceso = pagoExtra || mayorEdad
let pudeConseguirLicencia = (pagoExtra || mayorEdad) && pago 

if(pudeConseguirLicencia){
    console.log("Puede conseguir licencia")
}else{
    console.log("No puede conseguir la licencia")
}