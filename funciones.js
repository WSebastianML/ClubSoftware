function areaRectangulo(ancho, largo){
    return ancho * largo
}

function areaTriangulo(base, altura){
    return base * altura / 2
}

function area(figura, valor1, valor2){
    if(figura == "rectangulo"){
        return areaRectangulo(valor1, valor2)
    }
    if(figura == "triangulo"){
        return areaTriangulo(valor1, valor2)
    }else{
        return "Figura no disponible"
    }
}

console.log(areaRectangulo(5, 2))
console.log(areaTriangulo(5, 2))
console.log(area("rectangulo", 5, 2))
console.log(area("triangulo", 5, 2))