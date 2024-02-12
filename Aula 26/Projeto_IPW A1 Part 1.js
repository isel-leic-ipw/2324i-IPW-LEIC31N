// IPW A1 Part 1 - Solution 1 - 2020-10-06
// Projeto daptado de soluções desenvolvidas pelos alunos.
console.log("IPW A1 Part 1\n")

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1.

console.log("1.\n")

/**
 * Validates a property of an object using a given property validator.
 *
 * @param {object} obj - The object whose property is being validated.
 * @param {object} propValidator - The property validator object.
 * @param {string} propValidator.name - The name of the property being validated.
 * @param {function[]} propValidator.validators - An array of validators for the property.
 * @return {boolean} Returns true if the property is valid, false otherwise.
 */
function validateProperty(obj, propValidator) {
    if (!Object.keys(obj).includes(propValidator.name)) return false;
    for (let validator of propValidator.validators) {
        if (!validator(obj[propValidator.name])) return false;
    }
    return true;
}

// Tests provided

console.log("Tests provided:\n")

const validator = {name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]  }
const obj1 = { p1 : "abc" }
const obj2 = { p2 : 123 }
const obj3 = { p1 : "a" , p2 : 123 }

console.log("validateProperty(obj1, validator) ->", validateProperty(obj1, validator), " expected: true") //true
console.log("validateProperty(obj2, validator) ->", validateProperty(obj2, validator), " expected: false") //false
console.log("validateProperty(obj3, validator) ->", validateProperty(obj3, validator), " expected: false") //false

// More tests

console.log("\nMore tests:\n")

const validator2 = {
    name: 'p1',
    validators: [
      (s) => typeof s == 'number' && s > 0,
      (s) => s % 2 == 0,
    ],
  };
  
const obj4 = { p1: 4 };
const obj5 = { p1: 7 };
const obj6 = { p1: 10, p2: 5 };

console.log("validateProperty(obj4, validator2) ->", validateProperty(obj4, validator2), " expected: true"); // true
console.log("validateProperty(obj5, validator2) ->", validateProperty(obj5, validator2), " expected: false"); // false
console.log("validateProperty(obj6, validator2) ->", validateProperty(obj6, validator2), " expected: true"); // true

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2.

console.log("\n2.\n")

/**
 * Copies properties from an object based on a set of property validators.
 *
 * @param {object} obj - The object from which properties will be copied.
 * @param {array} propValidators - An array of property validators.
 * @return {object} - An object containing the copied properties.
 */
function copyProperties(obj, propValidators) {
    return propValidators
        .filter(validators => validateProperty(obj, validators))
        .reduce((result, validator) => {
            result[validator.name] = obj[validator.name];
            return result;
        }, {});
}

// Tests provided

console.log("Tests provided:\n")

const validators = [
    {
       name: "p1", validators: [s => typeof s == 'string' && s.length > 2, s => s[0] == "a"]
    },
    {
       name: "p2", validators: [s => Number.isInteger(s)]
    }
 ]
 
 const obj7 = { p1: "a" }
 const obj8 = { p1: 123 }
 const obj9 = { p1: "abc", p2: 123 }

 console.log("copyProperties(obj7, validators) ->", copyProperties(obj7, validators), " expected: {}") // {}
 console.log("copyProperties(obj8, validators) ->", copyProperties(obj8, validators), " expected: {}"), // {}
 console.log("copyProperties(obj9, validators) ->", copyProperties(obj9, validators), " expected: { p1: 'abc', p2: 123 }") // { p1: 'abc', p2: 123 }

// More tests

 console.log("\nMore tests:\n")

 const validators2 = [
    {
      name: 'p1',
      validators: [s => typeof s === 'string' && s.length > 2, s => s[0] === 'a']
    },
    {
      name: 'p2',
      validators: [s => Number.isInteger(s)]
    }
  ];
  
  const obj10 = { p1: 'abcd', p2: 42, p3: 'extra' };
  const obj11 = { p1: 'bcd', p2: 123 };
  const obj12 = { p1: 'abc', p2: 123, p3: 'extra' };
  
  console.log("copyProperties(obj10, validators2) ->", copyProperties(obj10, validators2), " expected: { p1: 'abcd', p2: 42 }"); // { p1: 'abcd', p2: 42 }
  console.log("copyProperties(obj11, validators2) ->", copyProperties(obj11, validators2), " expected: { p2: 123 }"); // { p2: 123 }
  console.log("copyProperties(obj12, validators2) ->", copyProperties(obj12, validators2), " expected: { p1: 'abc', p2: 123 }"); // { p1: 'abc', p2: 123 }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3.

console.log("\n3.\n")

/**
 * Copies properties from an object based on a set of property validators.
 *
 * @param {object} obj - The object from which properties will be copied.
 * @param {array} propValidators - An array of property validators.
 * @return {object} - An object containing the copied properties.
 */
Object.prototype.copyProperties = function (validators) {return copyProperties(this, validators)}

// Tests provided

console.log("Tests provided:\n")

const validators3 = [
  {
     name: "p1", validators: [s => typeof s == 'string' && s.length > 2, s => s[0] == "a"]
  },
  {
     name: "p2", validators: [s => Number.isInteger(s)]
  }
]

const obj13 = { p1: "a" }
const obj14 = { p1: 123 }
const obj15 = { p1: "abc", p2: 123 }
console.log("obj13.copyProperties(validators3) ->", obj13.copyProperties(validators3), " expected: {}") // {}
console.log("obj14.copyProperties(validators3) ->", obj14.copyProperties(validators3), " expected: {}") // {}
console.log("obj15.copyProperties(validators3) ->", obj15.copyProperties(validators3), " expected: { p1: 'abc', p2: 123 }") // { p1: 'abc', p2: 123 }   

// More tests

console.log("\nMore tests:\n")

const validators4 = [
  {
    name: "p1", validators: [s => typeof s === 'string' && s.length > 2, s => s[0] === "a"]
  },
  {
    name: "p2", validators: [s => Number.isInteger(s)]
  },
  {
    name: "p3", validators: [s => Array.isArray(s)]
  }
];

const obj16 = { p1: "abc", p2: 123, p3: [1, 2, 3] };
const obj17 = { p1: "abcd", p2: 42, p3: [4, 5, 6] };
const obj18 = { p1: "a", p3: [2,5], p3: [7, 8, 9] };

console.log("obj16.copyProperties(validators4) ->", obj16.copyProperties(validators4), " expected: { p1: 'abc', p2: 123, p3: [ 1, 2, 3 ] }");
console.log("obj17.copyProperties(validators4) ->", obj17.copyProperties(validators4), " expected: { p1: 'abcd', p2: 42, p3: [ 4, 5, 6 ] }");
console.log("obj18.copyProperties(validators4) ->", obj18.copyProperties(validators4), " expected: { p3: [ 7, 8, 9 ] }");

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4.

console.log("\n4.\n")

/**
 * Associates each element in the array with a transformed value
 * using the provided transformation function.
 *
 * @param {Function} transformation - The function used to transform each element.
 * @return {Object} - An object where each key is an element from the array and
 * the corresponding value is the transformed value.
 */
Array.prototype.associateWith = function (transformation) {
    let object = {};
    this.forEach(function(element) {object[element] = transformation(element)})
    return object;
}

// Tests provided

console.log("Tests provided:\n")

let numbers = ["one", "two", "three", "four"]
console.log("numbers.associateWith( str => str.length ) ->", numbers.associateWith( str => str.length ), " expected: { one: 3, two: 3, three: 5, four: 4}")

// { one: 3, two: 3, three: 5, four: 4}

// More tests

console.log("\nMore tests:\n")

let words = ["apple", "banana", "cherry", "date"];
console.log("words.associateWith( str => str.charAt(0) ) ->", words.associateWith( str => str.charAt(0) ), " expected: { apple: 'a', banana: 'b', cherry: 'c', date: 'd' }");

let numbers2 = [1, 2, 3, 4, 5];
console.log("numbers2.associateWith( num => num * 2 ) ->", numbers2.associateWith( num => num * 2 ), " expected: { '1': 2, '2': 4, '3': 6, '4': 8, '5': 10 }");

let animals = ["cat", "dog", "elephant"];
console.log("animals.associateWith( str => str.toUpperCase() ) ->", animals.associateWith( str => str.toUpperCase() ), " expected: { cat: 'CAT', dog: 'DOG', elephant: 'ELEPHANT' }");

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5.

console.log("\n5.\n")

/**
 * Check if all submitted users are valid based on a list of good users.
 * @param {Array} goodUsers - The list of good users.
 * @returns {Function} - A function that checks if all submitted users are valid.
 */
function checkUsersValid(goodUsers) {
    /**
     * Check if all submitted users are valid.
     * @param {Array} submittedUsers - The list of submitted users.
     * @returns {boolean} - True if all submitted users are valid, false otherwise.
     */
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(user => goodUsers. some(goodUser => user.id == goodUser.id));
    };
}

// Tests provided

console.log("Tests provided:\n")

var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers)

console.log("testAllValid([{ id: 2 },{ id: 1 }]) ->", testAllValid([
  { id: 2 },
  { id: 1 }
]), " expected: true")
// => true

console.log("testAllValid([{ id: 2 },{ id: 4 },{ id: 1 }]) ->", testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
]), " expected: false")
// => false

// More tests

console.log("\nMore tests:\n")

var goodUsers2 = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 }
];

var testAllValid2 = checkUsersValid(goodUsers2);

console.log("testAllValid2([{ id: 2 },{ id: 1 },{ id: 3 }]) ->", testAllValid2([
  { id: 2 },
  { id: 1 },
  { id: 3 }
]), " expected: true");
// => true

console.log("testAllValid2([{ id: 2 },{ id: 4 },{ id: 1 },{ id: 5 }]) ->", testAllValid2([
  { id: 2 },
  { id: 4 },
  { id: 1 },
  { id: 5 }
]), " expected: false");
// => false

var goodUsers3 = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
];

var testAllValid3 = checkUsersValid(goodUsers3);

console.log("testAllValid3([{ id: 2 },{ id: 1 },{ id: 3 },{ id: 5 }]) ->", testAllValid3([
  { id: 2 },
  { id: 1 },
  { id: 3 },
  { id: 5 }
]), " expected: true");
// => true

console.log("testAllValid3([{ id: 2 },{ id: 4 },{ id: 1 },{ id: 5 }]) ->", testAllValid3([
  { id: 2 },
  { id: 4 },
  { id: 1 },
  { id: 5 }
]), " expected: false");
// => false

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 6.

console.log("\n6.\n")

/**
 * Creates a spy function that wraps the given method of the target object. The spy function counts
 * the number of times the wrapped method is called and returns an object with the count.
 *
 * @param {Object} target - The target object that contains the method to be spied on.
 * @param {string} method - The name of the method to be spied on.
 * @return {Object} - An object containing the count of method calls.
 */
function Spy(target, method) {
    const originalFunction = target[method]
    var result = {count: 0}
    target[method] = function() {
      result.count++
      return originalFunction.apply(this, arguments)
    }
    return result
}


// Tests provided

console.log("Tests provided:\n")

var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log("spy.count ->", spy.count, " expected: 3") // 3

// More tests

console.log("\nMore tests:\n")

var targetObject = {
  method1: function() {
    console.log('Method 1 called');
  },
  method2: function() {
    console.log('Method 2 called');
  }
};

var spy1 = Spy(targetObject, 'method1');
var spy2 = Spy(targetObject, 'method2');

targetObject.method1();
targetObject.method1();
targetObject.method2();

console.log("spy1.count ->", spy1.count, " expected: 2"); // 2
console.log("spy2.count ->", spy2.count, " expected: 1"); // 1