var s1 = "   fly me   to   the moon  "
var s2 = "Hello World"
var s3 = "luffy is still joyboy"

var lengthOfLastWord = function(s) {
    arr = s.trim(' ').split(' ');
    return arr[arr.length -1].length
};

console.log(lengthOfLastWord(s1)) // 4
console.log(lengthOfLastWord(s2)) // 5
console.log(lengthOfLastWord(s3)) // 6

/*console.log(s.trim(' ').split(' '))
console.log(s.replace(/\s+/g,''))*/