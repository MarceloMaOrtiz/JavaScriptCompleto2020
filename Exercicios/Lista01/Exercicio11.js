// 11) ​ As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

function bissexto(ano){
    if (!(ano % 400)){
        console.log(`${ano} é ano bissexto`)
        return true
    }
    if (!(ano % 4)){
        if (ano % 100){
            console.log(`${ano} é ano bissexto`)
            return true
        }
    }
    console.log(`${ano} não é ano bissexto`)
    return false
}

bissexto(43)
bissexto(80)
bissexto(200)
bissexto(260)
bissexto(400)