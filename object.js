d = { a: 100, 'hello': 'world', 100: 'world', 'mr x': 123, fullName: 'Vipin Singh', a: 200};

console.log(d['a']);
console.log(d[100]);

console.log(d['mr x']);

console.log(d.a);
console.log(d['mr x']);

console.log(d.fullName);

console.log(d.a);

d.fullName = 'Mr. XYZ';
console.log(d.fullName);

d['b'] = 99;
console.log(d);

console.log(d.b);

delete(d.b);
console.log(d);
