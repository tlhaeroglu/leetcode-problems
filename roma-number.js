/* 
I  1
V  5
X  10
L  50
C  100
D  500
M  1000 
*/

const map = new Map();
map.set(1,'I');
map.set(4,'IV');
map.set(5,'V');
map.set(9,'IX');
map.set(10,'X');
map.set(40,'XL')
map.set(50,'L');
map.set(90,'XC');
map.set(100,'C');
map.set(400,'CD');
map.set(500,'D');
map.set(900,'CM')
map.set(1000,'M');

const arr = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

var intToRoman = function(num) {
    var str = '';
    let i =0;
    
    while(i<arr.length){
        if(num >= arr[i]){
            str+=map.get(arr[i]);
            num-=arr[i]
        } else{
            i++;
        }
    }
    return str;
    
};

console.log(intToRoman(1994)) //MCMXCIV
console.log(intToRoman(58)) //LVIII

var romanToInt = function(s) {
    let prev = 1000;
    var sum = 0;
    
    s.split('').forEach(element => {
        var num = map.get(element)
        if(num <= prev){
            sum +=num;
        } else{
            sum += num-(prev*2);
        }
        prev = num;
    });
    return sum;
};

//console.log(romanToInt("III"))// M = 1000, CM = 900, XC = 90 and IV = 4. 1994 
// this log not working because on the top map is reversed. ('I',1) this works still that log