x = "hello"
console.log(x);
x = `hello`
console.log(x);
y = 'Mr. X'
x = `hello ${y}`
console.log(x);
x = 'hello' + y
console.log(x);
x = 'hello ' + y
console.log(x);
x = 'hello' + ' ' + y
console.log(x);
x = `hello ${1 + 1}`
console.log(x);
x = `hello ${'Mr.' + 'X'}`;
console.log(x);
function add(a, b) { return a + b; }
x = `calling a function to add 20 and 30: ${ add(20, 30) }`;
console.log(x);

x = 'hello' + 1;
console.log(x);

x = 'hello'; // 0 -> h; 1 -> e; 2 -> l; 3 -> l; 4 -> o
console.log(x.length);

console.log(x[0]);
console.log(x[1]);
console.log(x[3]);

x[3] = 'o';
console.log(x);

console.log(x.slice(0, 3));
console.log(x.slice(4));

z = x.slice(0, 3) + 'o' + x.slice(4)
console.log(z);

x = 'hello';
console.log(x.split(''));

// [vipin@localhost javascript-practise]$ node 
// > x = 'world'
// 'world'
// > x.concat('how are you?')
// 'worldhow are you?'
// > x.concat(' how are you?')
// 'world how are you?'
// > x
// 'world'
// > x = '   world '
// '   world '
// > x.trim()
// 'world'
// > x.search('d')
// 7
// > x
// '   world '
// > x = 'world'
// 'world'
// > x.search('d')
// 4
// > x.search('or')
// 1
// > x
// 'world'
// > x.search('or', 3)
// 1
// > x.search('or')