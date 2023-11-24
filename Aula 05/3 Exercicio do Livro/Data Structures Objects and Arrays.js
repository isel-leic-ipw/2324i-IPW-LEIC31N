//Resolução/Descrição: conforme exercícios do cap 4 do livro
function range(min, max){
    const arr = [];
    let a = 0;
    for (let i = min;  i <= (max); i++ ){
        arr[a++] = min;
        min++;
    }
    return arr;
}
console.log(range(1, 10));

function sum(arr){
    let sum = 0;
    for (i in arr){
        sum += arr[i];
    }
    return sum;
}

console.log(sum(range(1, 10)));

function reverseArray(arr){
    const size = arr.length;
    let a = [];
    let j = 0;
    for (i = size-1; i >= 0; i--){
        a[j] = arr[i];
        j++;
    }
    return a;
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

function reverseArrayInPlace(arr){    
    const size = arr.length;
    let a = [];
    let j = 0;
    let h = 0;
    for (i = size-1; i >= Math.floor((size-1)/2); i--){
        h = arr[j]
        arr[j] = arr[i];
        arr[i] = h
        j++;
    }
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

function arrayToList(arr){
    let list = {value: arr[arr.length-1], rest: null};
    let a = {}
    for(i = arr.length - 2; i >= 0; i--){
       a = {value: arr[i], rest: list};
       list = a
    
    }
    
    return a;
}

function listToArray(list){
    let arr = [];
    let i = 0;
    let list1 = list
    while(list1 != null){
        arr[i] = list1.value;

        list1 = list1.rest
        i++
    }
    return arr;
}

function prepend(val, list){
    const head = {value: val, rest: list};
    return head;
}

function nth(list, pos){
    let i = 0;
    let  newList = list;
    while (newList != null){
        if(i == pos){
            return newList.value;
        }else
        i++;
        newList = newList.rest;
    }
    return undefined;
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


/*
function deepEqual(arg1, arg2){
    let count1 = 0;
    let count2 = 0;
    for(i in arg1){
            count1++;
        }
        for (i in arg2){
            count2++;
        }
        if (count1 != count2){
            return false;
        } 
        else{

            typeOf1 = typeof(arg1);
            typeOf2 = typeof(arg2);

            
            if(((typeOf1 == 'object' || typeOf1 == null) && arg1 != null) && ((typeOf2 == 'object' || typeOf2 == null) && arg2 != null)){
                deepEqual(arg1.key, arg2.key);
            }
            return arg1 === arg2;
        }
  
}
*/
function deepEqual(a, b) {
    if (a === b) {
      return true;
    }  
    if (typeof a === 'object' && typeof b === 'object') {
     
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) {
        return false;
        }
        for (let key of keysA) {
            if (!keysB.includes(key)) {
            return false;
            }
            if (!deepEqual(a[key], b[key])) {
            return false;
            }
        } 
        return true;
    }
    return false;
  }


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true