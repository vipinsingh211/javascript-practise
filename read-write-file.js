var fs = require('fs');

// fs.readFile('test.txt', function (err, data) {
//     if (err) {
//         console.log(err);
//         return 0;
//     }
//     console.log(data.toString());
// });


// new_data = 'new hello text';
// fs.writeFile('test.txt', new_data, function(err) {
//     if (err) { return 0; }
//     console.log('Successfully written the text.');
// });

onemore_new_data = 'again hello text';
fs.appendFile('test.txt', onemore_new_data, function(err) {
    if (err) { return 0; }
    console.log('Successfully appended the text.');
});