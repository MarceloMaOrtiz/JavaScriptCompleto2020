module.exports = (app, text) => {
    function salvar(req, res) {
        res.send('Produto > Salvar > ' + text)
    }

    function obter(req, res) {
        res.send('Produto > Obter > ' + text)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    // Sem o retorno já funcionaria, mas ainda é possível retornar
    //  essas funções caso haja um interesse em usa-las para algo
    // return { salvar, obter }
}