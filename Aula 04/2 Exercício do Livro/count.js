var countBs = function(string){
    var word = String(string), count = 0, x = 0
    while(x < word.length){
        if(word.charAt(x)=='B' || word.charAt(x)=='b') count++
        x++
    }
    return count
}

console.log(countBs("ABC"));

var countChar = function(string2, char) {
    var word = String(string2), count = 0, x = 0
    while(x < word.length){
        if(word.charAt(x)==String(char)) count++
        x++
    }
    return count
}

console.log(countChar("Instituto Superior de Engenharia de Lisboa", "o"));