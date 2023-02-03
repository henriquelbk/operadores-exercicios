let numero1 = Number(prompt('Insira um número qualquer:'))
let numero2 = Number(prompt('Insira outro número qualquer:'))

console.log(`O primeiro numero é maior que o segundo? ${numero1 > numero2}`)
console.log(`O primeiro numero é igual ao segundo? ${numero1 === numero2}`)
console.log(`O primeiro numero é divisível pelo segundo? ${numero1 % numero2===0}`)
console.log(`O segundo numero é divisível pelo primeiro?  ${numero2 % numero1===0}`)

/*
O primeiro numero é maior que o segundo? 
O primeiro numero é igual ao segundo? 
O primeiro numero é divisível pelo segundo? 
O segundo numero é divisível pelo primeiro? 
*/