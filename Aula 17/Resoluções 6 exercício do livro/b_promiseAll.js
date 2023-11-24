//Resoluções exercícios cap 11 do livro disponível em: https://eloquentjavascript.net/11_async.html

function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        // Your code here.
        let count = promises.length;
        if (count == 0) resolve(promises);
        else {
            const results = [];
            for (let i = 0; i < count; i++) {
                const j = i;
                promises[j].then(it => {
                    results[j] = it
                    if (--count == 0) resolve(results);
                }).catch(e => reject(e));
            }
        }
    });
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});
function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), 400);//Math.random() * 400);
    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), soon(2), soon(3), soon("a").then(it => Promise.reject(it)), soon(3)])
    .then(array => {
        console.log("Aqui não deveria chegar");
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error);
        }
    });