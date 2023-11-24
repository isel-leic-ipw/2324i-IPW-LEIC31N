//Resolução de exercícios do cap 6 livro disponível em: https://eloquentjavascript.net/06_object.html

class Group {
    constructor() {
        this.elements = [];
        this.modCount = 0;
    }

    static from(values) {
        let group = new Group();
        // When building a Group instance from an initial set of values, DO NOT rely on the add() method; instead,
        // directly manipulate the instance's elements field.
        for (const value of values)
            group.elements.push(value);

        return group;
    }


    add(value) {
        let accepted = !this.has(value);
        if (accepted) {
            this.elements.push(value);
            this.modCount++;
        }

        return accepted;
    }

    delete(value) {
        let index = this.elements.indexOf(value),
            deleted = index !== -1;

        if (deleted) {
            this.elements.splice(index, 1);
            this.modCount++;
        }

        return deleted;
    }

    has(value) {
        return this.elements.indexOf(value) !== -1;
    }


    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;

        this.index = -1;
        this.expectedModCount = group.modCount;
    }


    next() {
        this.checkForConcurrentModification();

        let elements = this.group.elements,
            index = ++this.index;
        return {
            // Will be undefined if index is out of bounds.
            value: elements[index],
            done: index >= elements.length
        };
    }

    checkForConcurrentModification() {
        if (this.expectedModCount !== this.group.modCount)
            throw new Error("Collection was modified after start of iteration");
    }
}


let group = Group.from([10, 20]);
console.log(group.has(10));  // Should return true.
console.log(group.has(30));  // Should return false.

console.log(group.add(10));     // Should return false.
console.log(group.delete(10));  // Should return true.
console.log(group.has(10));     // Should return false.

// Should output the following:
// $: a
// $: b
// $: c
for (let value of Group.from(["a", "b", "c"]))
    console.log(value);
