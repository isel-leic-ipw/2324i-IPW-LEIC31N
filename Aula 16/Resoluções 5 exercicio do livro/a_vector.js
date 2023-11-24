//Resolução de exercícios do cap 6 livro disponível em: https://eloquentjavascript.net/06_object.html

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        // Use Pythagoras' theorem: a^2 + b^2 = c^2
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }


    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));   // Should return Vec {x: 3, y: 5}.
console.log(new Vec(1, 2).minus(new Vec(2, 3)));  // Should return Vec {x: -1, y: -1}.
console.log(new Vec(3, 4).length);                // Should return 5.
