function saudacao(nome) {
    // Caso utilizado do lado de fora, só será executado uma única
    //  vez, quando o servidor é iniciado, pois a função já terá
    //  sido executada.
    // console.log(`Seja bem vindo ${nome}`)
    return function(req, res, next) {
        // Caso utilizado aqui teremos sempre a chamada sendo feita,
        //  pois para cada requisição essa função é executada
        console.log(`Seja bem vindo ${nome}`)
        next()
    }
}

module.exports = saudacao