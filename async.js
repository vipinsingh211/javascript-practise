function msg(message) {
    console.log('message: ', message);
}

function printOneToOneThousand(callback) {
    setTimeout(function() {
        for (let i = 0; i < 100; i++) {
            console.log(i);
        }
    
        callback('loop completed');
    }, 0);
}

console.log('start');
printOneToOneThousand(msg);
console.log('end');
