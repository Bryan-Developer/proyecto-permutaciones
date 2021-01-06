const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
function conjunto(c) {
  if (c.length === 1) {
    return c
  }
  else {
    return c.slice(0,1) + ',' + conjunto(c.slice(1, c.length))
  }
}
rl.question('Ingrese un conjunto de elementos: ', respuesta => {
  console.log('Total de Elementos: ' + respuesta.length)
  console.log('Conjunto de Elementos[' + conjunto(respuesta) + ']')
  rl.close()
})
