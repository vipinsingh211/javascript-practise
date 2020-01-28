function msg(message) {
    console.log('message: ', message);
}

function printOneToOneThousand(callback) {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }

    callback('loop completed');
}

console.log('start');
printOneToOneThousand(msg);
console.log('end');


// function test() {
//     //
// }

// t = test
// test()

// t()