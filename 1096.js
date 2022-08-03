var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

for (let i = 1; i <= 9; i += 2) {
    for (let I = i, J = 7; (J >= 5); J-=1) {
        console.log(`I=${I} J=${J}`);
    }
}