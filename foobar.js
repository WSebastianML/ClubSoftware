function foobar(numero){
    if(numero % 3 == 0){
        if(numero % 5 == 0){
            console.log("foobar")
        }else {
            console.log("foo")
        } 
    }else if(numero % 5 == 0){
        console.log("bar")
    }else{
        console.log(numero)
    }
}

function foobar2(numero){
    if((numero % 3 == 0) && (numero % 5 == 0)){
        console.log("foobar")
    } else if(numero % 3 == 0){
        console.log("foo")
    } else if(numero % 5 == 0){
        console.log("bar")
    } else{
        console.log(numero)
    }
}

for(let i = 1; i <= 30; i++){
    foobar2(i)
}