const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(JSON.stringify(obj)) // Convert Objeto Java em JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) // Error, todo nome do atributo tem que ser delimitado

// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // Error, todo nome de atributo tem que utilizar ""

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // Foi utilizado '' por fora pra não ter a necessidade de usar \ para utilizar ""

console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // Convert JSON em JS Object