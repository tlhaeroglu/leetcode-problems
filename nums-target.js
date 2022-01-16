var twoSum = function(nums, target) {
    for(let i=0; i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};

console.log(twoSum([3,2,4],6))
console.log(twoSum([3,2,4,8,1,7,5],12))