var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

for (let i = 1, j =7; i <= 9; i += 2, j += 2) {
    for (let I = i, k = j; k >= (j-2); k--) {
        
        console.log(`I=${I} J=${k}`);
    }
}