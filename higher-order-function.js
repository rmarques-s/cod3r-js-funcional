/*
Funções que operam outras funções, podemos passar uma função como argumento para outra função ou retornar uma função a partir de outra função */

function run(fn){
  return `Result: ${fn()}` //uma função será executada
}

function sayHello(){
  console.log("Hello!")
  return 3
}

run(sayHello())

run(function() {
  console.log(`run!!`)
})

const result = run(Math.random)
console.log(result)
