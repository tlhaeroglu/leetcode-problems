var a = 121;
var b = -10;
var c = 10;
var d = 0;

var isPalindrome = function(x) {
    var mod = 0;
    var final = 0;
    var temp = x;
    if(x >= 0){

        while(x > 0){
            mod = x % 10;
            x = parseInt(x/10);
            final =final*10+mod;
        }
        return final === temp

    } else{
        return false;
    }
};

console.log(isPalindrome(a));//true
console.log(isPalindrome(b));//false
console.log(isPalindrome(c));//false
console.log(isPalindrome(d));//true
