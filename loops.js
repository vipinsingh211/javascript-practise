names = ['John', 'Phil', 'X'];
for (name of names) {
    console.log('Hello ' + name);
}

console.log('-------------------------');

name_and_age = {'John': 13, 'Phil': 11, 'X': 3};
for (name of names) {
    console.log(name + ' age is ' + name_and_age[name]);
}

console.log('-------------------------');

name = 'John';
for (x of name) {
    console.log(x);
}

console.log('-------------------------');

names = ['John', 'Phil', 'X'];
for (i = 0; i < names.length; i++) {
    console.log('Hello ' + names[i]);
}

console.log('-------------------------');

x = 10;
console.log(x++);  // post-increment
console.log(x);

console.log('-------------------------');

x = 10;
console.log(++x);  // pre-increment
console.log(x);

console.log('-------------------------');

x = 10;
console.log(x--); // post-decrement
console.log(x);

console.log('-------------------------');

x = 10;
console.log(--x); // pre-decrement
console.log(x);

console.log('-------------------------');

numbers = [11, 22, 33];
i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

console.log('-------------------------');

i = 0;
do {
    console.log(numbers[i]);
    i++;
} while (i > numbers.length);

console.log('-------------------------');

numbers.forEach((element) => {
    console.log(element);
});

// f = function () {
//     console.log('hello')
// }

// f();

// f = () => {
//     console.log('hello again');
// }

// f();

// function add() {
//     console.log(1 + 1);
// }


// f = add;
// f();

console.log('-------------------------');

console.log(Object.keys(name_and_age));
console.log(Object.values(name_and_age));

console.log('-------------------------');

Object.keys(name_and_age).forEach((element) => {
    console.log(element + ' age is ' + name_and_age[element]);
});
