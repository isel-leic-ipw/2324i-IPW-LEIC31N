var isEven = function(x) {
    if(x==0) return true;
    if(x==1) return false;
    if(x<0) return isEven(x+2);
    if(x>0) return isEven(x-2);
}

console.log(isEven(40));
console.log(isEven(65));
console.log(isEven(-2));
console.log(isEven(-1));