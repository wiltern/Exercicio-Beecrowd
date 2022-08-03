var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

for (let I = 1, J = 60; J >= 0; I += 3, J -= 5){
    console.log(`I=${I} J=${J}`);
}