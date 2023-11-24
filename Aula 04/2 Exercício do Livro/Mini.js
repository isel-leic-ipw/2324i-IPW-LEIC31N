var min = function(x, y) {
    var number = 0
    if(x==y) number=x
    else if(x<y) number=x
    else number =y
    return number
}

console.log(min(3,25));
console.log(min(-2,1));
console.log(min(2,1));