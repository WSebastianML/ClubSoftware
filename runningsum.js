function runningSum(nums){
    let output = []
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        output.push(sum);
    }
    return output;
}

let nums = [7, 2, 5, 4, 1, 0, 3];
console.log(runningSum(nums));
