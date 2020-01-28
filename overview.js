var a;
a = 10;

let b = 2;
b = 20;
let x;
x = 'hello';
const c = 10;

console.log(x);

let t = undefined;

console.log(t);

t = 0xFFFFFF;

// rgb(0, 0, 0);
// 0x000000;
// 0-1
// 0o000;

// 3e12;
let y = 3 * 10**8;
x = 3e8;
console.log(x);
console.log(y);

console.log(Math.PI);

const z = true; // 1
const z1 = false; // 0

// false = undefined = null = 0 = '' = NaN (Not a number)

if (c != 10) {
    console.log('if block');
} else {
    console.log('else block');
}

x = 10;

if (x < 10 || x == 10) {
    console.log('less than 10');
} else if (x > 10) {
    console.log('greater than 10');
} else {
    console.log('equal to 10');
}

for (let i = 10; i > 0; i = i - 1) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

function test(a, b) {
    console.log(a + b);
}

test(10, 20);

test('vipin ', 'singh')

const w = 'hello ' + 'world ' + ', how ' + ' are ' + ' you?';
console.log(w);