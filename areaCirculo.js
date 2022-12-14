let r = parseInt(process.argv [2]) //toma el valor en la posicion 2 en el terminal
function areaCirculo(r){
    return Math.PI * (r ** 2)
}
let result = areaCirculo(3)
console.log(typeof(r))
console.log(typeof(process.argv))
console.log(r + 4)
console.log(areaCirculo(32))