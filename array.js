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

mobile_number = ['+44', '9234', '34', '567'];
console.log(mobile_number.slice(0,3).join('-'));

x = [1, 2, 3];
new_array = mobile_number.concat(x);
console.log(new_array);

y = [1, 2, 3] + [9, 8, 7];
console.log(y);

console.log(mobile_number.sort());

number = [100, 9, 4, 12, 6, 5];
console.log(number);

console.log(number.sort());

strings = ['def', 'abc', 'rst', 'xyz', 'asd'];
console.log(strings.sort());

mix_array = strings.concat(number);
console.log(mix_array);
console.log(mix_array.sort());

a = [1, 2, 3, 4, 500, 2, 1, 999];
console.log(a.indexOf(1000));

console.log(a.indexOf(1, 2));

console.log(a.reverse());