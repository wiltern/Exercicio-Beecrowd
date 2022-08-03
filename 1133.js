var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n" )

var entry1 = parseInt(lines.shift());
var entry2 = parseInt(lines.shift());

if(entry1 < entry2){
for(let i = entry1; i < entry2; i++){
    if(i % 5 === 2 || i % 5 === 3){
        let somador = i
        console.log(somador)
    }
}}else{
    for(let i = entry2; i < entry1; i++){
        if(i % 5 === 2 || i % 5 === 3){
            let somador = i
            console.log(somador)
        }
    } 
}