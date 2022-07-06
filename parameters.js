// Testando parâmetros

function logParams(a, b, c) {
  console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5, 6)
logParams(1, 2, 3)

let x = logParams(1, 2)
console.log(x) //a função logParams não tem return

// Testando default parameters

function defaultParams(a = 1, b = 2, c = 0) {
  console.log(a, b, c)
}

defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams()

// Operador spread/rest
// Quantidade variável de parâmetros

function logNums(...nums) {
  console.log(Array.isArray(nums))
  for (let n of nums) {
    console.log(n)
  }
}

// Simplificando

function logNums(...nums) {
  console.log(nums)
}

logNums([1, 2, 3, 4, 5, 6])

function sumAll(...nums) {
  let total = 0
  for (let n of nums) {
    total += n
  }
  return total
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
