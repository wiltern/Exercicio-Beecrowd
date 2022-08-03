var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var cod1 = lines.shift()
var cod2 = lines.shift()

var [codigo1, quant1, preco1] = cod1.split(" ")
codigo1 = parseInt(codigo1)
quant1 = parseInt(quant1)
preco1 = parseFloat(preco1)

var [codigo2, quant2, preco2] = cod2.split(" ")
codigo2 = parseInt(codigo2)
quant2 = parseInt(quant2)
preco2 = parseFloat(preco2)

var soma =  (quant1 * preco1) + (quant2 * preco2)

console.log(`VALOR A PAGAR: R$ ${soma.toFixed(2)}`)
