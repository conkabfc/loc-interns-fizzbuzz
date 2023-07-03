// This is our main function
function fizzbuzz() {

    for (let i = 1; i < 4000; i++) {
        let toLog = "";

        // Multiple of 3: Fizz
        if (i % 3 == 0) {
            toLog += "Fizz";
        }

        // Multiple of 13: Fezz (Before any word beginning 'B')
        if (i % 13 == 0) {
            toLog += "Fezz";
        }

        // Multiple of 5: Buzz
        if (i % 5 == 0) {
            toLog += "Buzz";

        }

        // Multiple of 7: Bang
        if (i % 7 == 0) {
            toLog += "Bang";
        }

        // None of above: Number
        if (toLog == "") {
            toLog = i;
        }

        // Multiple of 11: Bong
        if (i % 11 == 0) {
            // Multiple of 13 AND 11: FezzBong
            if (i % 143 == 0) {
                toLog = "FezzBong";
            } else {
                toLog = "Bong";
            }
        }

        // Multiple of 17: Reverse
        if (i % 17 == 0) {
            let tempLog = toLog;
            if (tempLog.length > 3) {
                toLog = "";
                while (tempLog.length > 0) {
                    toLog += tempLog.slice(-4);
                    tempLog = tempLog.slice(0, tempLog.length - 4);
                }
            }
            
        }

        console.log(toLog)
    }


}

// Now, we run the main function:
fizzbuzz();

