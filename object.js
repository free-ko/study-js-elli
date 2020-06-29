// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ko = {
    name: 'ko',
    age: 29
};
print(ko);

// with JavaScript magic (dynamically typed language)
// can add properties later
ko.hasJob = true;
console.log(ko.hasJob);

// can delete properties later
delete ko.hasJob;


// 2. Computed properties
// key should be always string
console.log(ko.name); // 일반적인 코딩 할 때
console.log(ko['name']); // 실시간으로 유저로 부터 데이터를 얻을 때

function printValue(obj, key) {
    console.log(obj[key]);
}

// 3. Property value shorthand
const person1 = {
    name: 'bob',
    age: 2
};
const person2 = {
    name: 'steve',
    age: 3
};
const person1 = {
    name: 'dave',
    age: 4
};
const person1 = new Person('ko', 29);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ko);
console.log('age' in ko);
console.log('random' in ko);
console.log(ko.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ko) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {
    name: 'ko',
    age: '29'
};
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way (cloning)
const user4 = Object.assign({}, user); // user4가 빈공간의 obj알려주고 user에 있는 obj을 복사함

console.log(user4);

// another example
const fruit1 = {
    color: 'red'
};
const fruit2 = {
    color: 'blue',
    size: 'big'
};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있는 obj으로 덮어씌움
console.log(mixed.color); // blue
console.log(mixed.size); // big