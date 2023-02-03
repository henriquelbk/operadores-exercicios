// Parte 1

const operacao1 = 5 > 20 && 5 < 2
console.log(operacao1)

const operacao2 = 5 === 5 || 5 === '5'
console.log(operacao2)

const operacao3 = !(20 > 50)
console.log(operacao3)

const operacao4 = !(20 > 50 || 50 > 60)
console.log(operacao4)

// Parte 2

//1)

const salario = 2000
const auxCreche = 45.5 * 2
const salarioBenef = salario + auxCreche
console.log(salarioBenef)

// 2)

const comissaoJan = (5784.5 * 0.1)
const salarioJan = salarioBenef + comissaoJan
console.log(salarioJan)

// 3)

const inssJan = 0.05 * salarioJan
const salarioLiquidoJan = salarioJan - inssJan
console.log(salarioLiquidoJan)

// 4)

const comissaoFev = (3418.41 * 0.1)
const salarioFev = salarioBenef + comissaoFev
const inssFev = 0.05 * salarioFev
const salarioLiquidoFev = salarioFev - inssFev
console.log(salarioLiquidoFev)

const comissaoMar = (4124.1 * 0.1)
const salarioMar = salarioBenef + comissaoMar
const inssMar = 0.05 * salarioMar
const salarioLiquidoMar = salarioMar - inssMar
console.log(salarioLiquidoMar)

const comissaoAbr = (1874 * 0.1)
const salarioAbr = salarioBenef + comissaoAbr
const inssAbr = 0.05 * salarioAbr
const salarioLiquidoAbr = salarioAbr - inssAbr
console.log(salarioLiquidoAbr)

const comissaoMai = (7000 * 0.1)
const salarioMai = salarioBenef + comissaoMai
const inssMai = 0.05 * salarioMai
const salarioLiquidoMai = salarioMai - inssMai
console.log(salarioLiquidoMai)

const comissaoJun = (9450 * 0.1)
const salarioJun = salarioBenef + comissaoJun
const inssJun = 0.05 * salarioJun
const salarioLiquidoJun = salarioJun - inssJun
console.log(salarioLiquidoJun)

// 5)

const salarioMedio = (salarioLiquidoJan + salarioLiquidoFev + salarioLiquidoMar + salarioLiquidoAbr + salarioLiquidoMai + salarioLiquidoJun) / 6
console.log(`Salário médio do primeiro semestre: ${salarioMedio}`)
