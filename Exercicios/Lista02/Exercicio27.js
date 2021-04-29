// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
// exemplo a seguir:
//     Exemplo:
//         inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}

const inverte = function(objeto){
    const obj = new Object
    for (const key in objeto) {
        if (objeto.hasOwnProperty(key))
            obj[parseInt(objeto[key])] = key
    }
    return obj
}

console.log(inverte({ a: 1, b: 2, c: 3}))