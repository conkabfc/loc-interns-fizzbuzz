const readline = require('readline-sync');

// This is our main function
function getTarget() {
    console.log('How far should we go?');
    let target = parseInt(readline.prompt());
    return target;
}

function fizzbuzz(target,rules) {

    for (let i = 1; i < (target+1); i++) {
        let toLog = [];

        // Multiple of 3: Fizz
        if (i % 3 == 0 && rules.includes(3)) {
            toLog.push("Fizz");
        }

        // Multiple of 13: Fezz (Before any word beginning 'B')
        if (i % 13 == 0 && rules.includes(13)) {
            toLog.push("Fezz");
        }

        // Multiple of 5: Buzz
        if (i % 5 == 0 && rules.includes(5)) {
            toLog.push("Buzz");

        }

        // Multiple of 7: Bang
        if (i % 7 == 0 && rules.includes(7)) {
            toLog.push("Bang");
        }

        // None of above: Number
        if (toLog == "") {
            toLog = [i];
        }

        // Multiple of 11: Bong
        if (i % 11 == 0 && rules.includes(11)) {
            // Multiple of 13 AND 11: FezzBong
            if (i % 143 == 0 && rules.includes(11) && rules.includes(13)) {
                toLog = ["Fezz","Bong"];
            } else {
                toLog = ["Bong"];
            }
        }

        // Multiple of 17: Reverse
        if (i % 17 == 0 && rules.includes(17)) {
            toLog = toLog.reverse();
        }
        
        let logString = "";
        toLog.forEach(element => logString += element);
        console.log(logString)
    }


}

let rules = [3,5,7,11,13,17];
if (process.argv.length > 2) {
    rules = process.argv[2].split(',').map(x=>+x);
}
let target = getTarget();
// Now, we run the main function:
fizzbuzz(target, rules);

