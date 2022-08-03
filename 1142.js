var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n" )

var entrada = parseInt(lines.shift())
var primlin = [1, 2, 3, 4]

var somas = primlin.map(function(som){
    return som * 2
})

console.log(somas)