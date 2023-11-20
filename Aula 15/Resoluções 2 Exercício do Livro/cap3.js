// Mínimo
function min(a, b) {
    return a < b ? a : b
}

// Recursão
function isEven(N) {
    if (N == 0) return true
    else if (N == 1 || N == -1) return false
    else return isEven(Math.abs(N) - 2)
}

// Contador de caracteres
function countBs(s) {
    return countChar(s, "B")
}

function countChar(s, c) {
    n = 0
    for (j = 0; j <= s.length; j++) {
        if (s[j] == c) n++
    }
    return n
}

console.log(countChar("Instituto Superior de Engenharia de Lisboa", "e"))