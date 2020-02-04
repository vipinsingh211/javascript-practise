var standard_input = process.stdin;
standard_input.setEncoding('utf-8');

console.log("Please enter a valid mobile number.");
standard_input.on('data', function (num) {
    if(num === 'exit\n') {
        console.log("User input complete, program exit.");
        process.exit();
    } else {
        // console.log(num.length);
        num = num.trim();
        if (num.match(/^\d+$/)) {
            if (num.length === 10) {
                console.log('a valid 10-digit mobile number.');
            } else if (num.length === 11 && num[0] === '0') {
                console.log('a valid 11-digit mobile number with prefix 0.');
            } else if (num.length === 14 && num.slice(0, 2) === '00') {
                console.log('a valid 14-digit mobile number with ISD code starting with 00.');
            } else {
                console.log('ERROR: Invalid mobile number.');
            }
        } else {
            if (num.length === 13 && num.match(/^\+\d{12}$/)) {
                console.log('a valid 13-digit mobile number with ISD code starting with +.');
            } else {
                console.log('ERROR: Invalid mobile number.');
            }
        }
    }
});

// \b - > backspace
// \t - > tab
// \n - > newline
// \r - > return
