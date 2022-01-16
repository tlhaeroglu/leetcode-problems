var searchInsert = function(nums, target) {
    /*var s = Math.floor(nums.length/2)
    var mid = nums[s]
    if(mid === target){
        return s;
    }
    if(mid> target){
        var prev = 
        for(let i = 0; i < nums.length; i++) {
            
            
        }
    }*/
    if(nums[0] === target || nums[0] > target)
        return 0;
    if(nums[nums.length-1] < target)
        return nums.length;
    
    for(let i= 1; i< nums.length; i++){
        if(nums[i-1] < target && nums[i] >= target)
            return i;
    }
};

console.log(searchInsert([1,3,4,7,10,21,42,44,45],19)) // 5
console.log(searchInsert([1,3,5,6],5)) // 2
console.log(searchInsert([1,3,5,6],2)) // 1
console.log(searchInsert([1,3,5,6],7)) // 4
// 5
