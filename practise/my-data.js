const fs = require('fs');

standard_input = process.stdin;
standard_input.setEncoding('utf-8');

let flag = true;
let names = [];
let temp = { first_name: '', last_name: '' };

console.log('Please enter your first name: ');
standard_input.on('data', function (name) {
    if (name === 'exit\n') {
        console.log(names);
        let data_string = '';
        for (let name of names) {
            data_string = data_string + 'First name: ' + name.first_name.trim() + '\n' + 'Last name: ' + name.last_name.trim() + '\n';
        }
        console.log(data_string);
        fs.appendFile('record.txt', data_string, function (err) {
            if (err) {
                console.log('Error while writing to the file');
                throw err;
            }
            console.log("User input complete, program exit.");
            process.exit();
        });
    } else {
        if (flag === true) {
            temp.first_name = name;
            flag = false;
            console.log('Please enter your last name: ');
        } else {
            temp.last_name = name;
            flag = true;
            console.log('Please enter your first name: ');
            names.push(JSON.parse(JSON.stringify(temp)));
        }
    }
});
