// Anonymous function

(function (a, b, c) {
  console.log(`Result: ${a + b + c}`)
})(1, 2, 3) //invocando a função sem precisar de resposta do usuário  

// Function expression
// Atribuindo o valor de uma função a uma variável
var sum = function (a, b) {
  return a + b
}

const result = sum(7, 59)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5, 9))

x = sum
console.log(x(11, 16))
