a = ['hello', 1, 2, 3.14, 'this is a big string', 10000, -20000];
console.log(a);
console.log(a[0]);

console.log(a.length);

console.log(a[a.length - 1]);

a[1] = 100;

console.log(a);

a[7] = 9000;
console.log(a);

a[11] = -23;
console.log(a);

console.log(a[9]);

console.log(a.length);

a.push('a');
console.log(a);
a.push('b');
console.log(a);
a.pop();
console.log(a);

a.push([7, 8, 9]);
console.log(a);

a.shift();
console.log(a);
a.unshift(200);
console.log(a);

console.log(a.slice(0, 2).join('++++'));

x = 'hello';
console.log(x.split(''));

x = 'hello world how are you?';
console.log(x.split(' '));
