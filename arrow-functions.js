// Function expression
const increment1 = function (n) {
  return n + 1
}

// Transformando a function expression em arrow function
const increment2 = (n) => {
  return n + 1
}


const increment3 = n => {
  return n + 1
}

//Funções imediatamente invocadas

(() => {
  console.log('arrow #01')
})();

(() =>  console.log('arrow #01'))();


// A palavra return é implícita. Para usá-la, devemos usar o par de chaves.

const increment4 = n => n + 1

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))

const sum = (a, b ) => a + b
console.log(sum(3, 8))