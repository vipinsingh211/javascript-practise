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
        if (num.length === 10) {
            console.log('a valid 10-digit mobile number.');
        }
        else {
            console.log('ERROR: Invalid mobile number.');
        }
    }
});

// \b - > backspace
// \t - > tab
// \n - > newline
// \r - > return
