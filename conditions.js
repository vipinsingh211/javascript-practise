if (100 - 100) {
    console.log('testing if');
}

if (undefined) {
    console.log('testing if 2');
}

if (!undefined) {
    console.log('testing if 3');
}

a = 10;
if (a < 10) { // < : lt; > : gt; <= : le; >= : ge; == : equal; === : exactly equal; != : not equal; !== : exactly not equal 
    console.log('testing if 4');
} else {
    console.log('testing else');
}

name = 'rew';
if (name === 'xyz') {
    console.log('name is xyz');
} else if (name === 'abc') {
    console.log('name is abc');
} else if (name === 'asd') {
    console.log('name is asd');
} else {
    console.log('name is unknown');
}

// && (and):
// false && false -> false
// false && true -> false
// true && true -> true

// || (or):
// false || false -> false
// false || true -> true
// true || true -> true


name = 'asd';

if (name === 'xyz' || name === 'abc' || name === 'asd') {
    console.log('know name');
} else {
    console.log('unknown names');
}

name = 'xyz';
age = 12;

if (name === 'xyz' && age === 13) {
    console.log('correct data');
} else {
    console.log('incorrect data');
}

var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

console.log(day);

// ternary operators
name = 'vipin';

is_correct_name = name === 'vipi' ? 'yes' : 'no';
console.log(is_correct_name);

// > 100 == '100'
// true
// > 100 === '100'
// false
// > 100 === 100
// true
// > 
