//Divisible entre 4
//No dividible entre 100
//Divisible entre 400

function bisiesto(year){
    if((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))){
        return true
    }else{
        return false
    }
}

console.log(bisiesto(2024))