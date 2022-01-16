var maximum69Number  = function(num) {
    let arr = num.toString().split("");
    for(let i=0; i< arr.length; i++){
        if(arr[i]==='9'){
            continue;
        } else{
            arr[i] = '9'
            break;
        }
    }
    return parseInt(arr.join(""));
};


console.log(maximum69Number(9669))//9969
console.log(maximum69Number(9996))//9999
console.log(maximum69Number(9999))//9999