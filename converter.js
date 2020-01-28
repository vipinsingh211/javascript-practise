// node converter.js cm_to_inch 10

// f_to_c and c_to_f

conversion_type = process.argv[2];
conversion_input = process.argv[3];

input = Number(conversion_input);

if (conversion_type === 'cm_to_inch') {
    inch = input * 0.393701;
    console.log(input + ' cms = ' + inch.toFixed(2) + ' inches');
} else if (conversion_type === 'inch_to_cm') {
    cm = input / 0.393701;
    console.log(input + ' inches = ' + cm.toFixed(2) + ' cms')
} else if (conversion_type === 'f_to_c') {
c = (input - 32) * 5/9;
console.log(input + 'f = ' + c.toFixed(2) + 'C')
} else if(conversion_type === 'c_to_f')
{
   f = (input * 9/5) + 32;
   console.log(input + 'c = ' + Math.round(f.toFixed(2)) + 'F');
} else {
    console.log('ERROR: invalid conversion type.');
}