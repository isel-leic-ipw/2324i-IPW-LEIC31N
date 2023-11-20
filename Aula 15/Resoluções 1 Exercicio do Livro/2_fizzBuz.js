let number = 1;
while (number <= 99) {
    if (number % 5 === 0 && number % 3 === 0) {
        console.log("FizzBuzz");
    }
    else if (number % 3 === 0){
        console.log("Fizz");
    }
    else if (number % 5 === 0 && number % 3 !== 0) {
        console.log("Buzz");
    }
    else console.log(number);
    number += 1;
}

// Using Switch case

// let number = 1;
// while (number <= 99) {
//     switch (true) {
//         case (number % 5 === 0 && number % 3 === 0):
//             console.log("FizzBuzz");
//             break;
//         case (number % 3 === 0):
//             console.log("Fizz");
//             break;
//         case (number % 5 === 0 && number % 3 !== 0):
//             console.log("Buzz");
//             break;
//         default:
//             console.log(number);
//     }
//     number += 1;
// }