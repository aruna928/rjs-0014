const fs = require("fs");

const file = fs.readFileSync("src/App.js", "utf8");

let score = 0;

function check(condition, message, marks) {

    if (condition) {

        console.log(`PASS: ${message} (+${marks})`);

        score += marks;

    } else {

        console.log(`FAIL: ${message}`);

    }
}

console.log("=================================");
console.log("RJS-P14 - useEffect Practical");
console.log("=================================");


// 1. useState
check(
    file.includes("useState"),
    "useState Hook is used",
    2
);


// 2. useEffect
check(
    file.includes("useEffect"),
    "useEffect Hook is used",
    3
);


// 3. State variable
check(
    /const\s*\[\s*message\s*,\s*setMessage\s*\]/.test(file),
    "Message state variable is created",
    1
);


// 4. setMessage
check(
    file.includes("setMessage"),
    "setMessage is used",
    1
);


// 5. Empty dependency array
check(
    /useEffect\s*\([\s\S]*?\[\s*\]\s*\)/.test(file),
    "useEffect runs after initial page load",
    1
);


// 6. Required message
check(
    file.includes("Welcome! The page has loaded successfully."),
    "Required welcome message is implemented",
    1
);


// 7. Message displayed
check(
    file.includes('id="message"'),
    "Message display area is implemented",
    1
);


console.log("---------------------------------");
console.log(`Total Marks: ${score}/10`);
console.log("---------------------------------");


// Minimum pass mark
if (score < 6) {

    console.log("RESULT: FAIL");

    process.exit(1);

} else {

    console.log("RESULT: PASS");

}
