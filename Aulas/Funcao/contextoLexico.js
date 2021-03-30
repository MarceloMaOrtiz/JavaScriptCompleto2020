const valor = 'Global'

// O contexto em que ela foi instanciada interfere no valor que será utilizado
function minhaFuncao(){
    console.log(valor)
}

minhaFuncao()

function exec(){
    const valor = 'Local'
    console.log(valor)
    minhaFuncao()
}

exec()
minhaFuncao()