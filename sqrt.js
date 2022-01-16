var mySqrt = function(x) {
    /*let prev = 0;
    if( x === 1) return 1;
    for(let i=0; i< Math.floor((x/2)+1) ;i++){
        if(Math.pow(i,2) === x){
            return i;
        }
        if(Math.pow(prev,2) <= x && Math.pow(i,2)> x){
            return prev;
        }
        prev = i;
    }*/

    let sqrt = Math.floor(Math.sqrt(x))
    return sqrt

};

/*console.log(mySqrt(8)) //2
console.log(mySqrt(0)) // 0
console.log(mySqrt(625)) //25 */

var isPerfectSquare = function(num) {
    let sqrt = Math.sqrt(num)
    if(sqrt % 1 === 0) return true;
    else return false;
};

console.log(isPerfectSquare(4)) // true
console.log(isPerfectSquare(625)) // true
console.log(isPerfectSquare(14)) //false