function suffle (nums, n){
    let output = [];
    for(let i = 0; i < n; i++){
        //Introducir dos numeros en cada iteracion
        output.push(nums[i]);
        output.push(nums[n+i]);
    }
    return output;
}

nums = [2,5,1,3,4,7];
n = 3;
let result = suffle(nums, n);
console.log(result)
