function salvar(req, res){
    res.send('Usuario > Salvar')
}

function obter(req, res){
    res.send('Usuario > Obter')
}

// {salvar: salvar, obter: obter} <-> {salvar, obter}
module.exports = { salvar, obter }