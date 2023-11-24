//Resolução de exercícios do cap 6 livro disponível em: https://eloquentjavascript.net/06_object.html

let map = {
    one: true,
    two: true,
    hasOwnProperty: true
};

// Bypasses the inacessibility of map#hasOwnProperty as an inherited method.
//
// Alternatively, one could do the following:
//    const hasOwnProperty = Object.prototype.hasOwnProperty.bind(map);
//    hasOwnProperty("one");
//    hasOwnProperty("three");
console.log(Object.prototype.hasOwnProperty.call(map, "one"));    // Should return true.
console.log(Object.prototype.hasOwnProperty.call(map, "three"));  // Should return false.
