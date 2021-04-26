// 19) ​ O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

function converte_Real(valor){
    valor = valor.toFixed(2)
    valor = valor.toString()
    valor = valor.replace('.', ',')
    valor = 'R$' + valor
    return valor
}

function pedido(cod_item, quantidade){
    switch (cod_item){
        case 100:
            console.log(`${quantidade} -> Cachorro Quente = ${converte_Real(3 * quantidade)}.`)
            break
        case 200:
            console.log(`${quantidade} -> Hamburgues Siples = ${converte_Real(4 * quantidade)}.`)
            break
        case 300:
            console.log(`${quantidade} -> Cheeseburguer = ${converte_Real(5.5 * quantidade)}.`)
            break
        case 400:
            console.log(`${quantidade} -> Bauru = ${converte_Real(7.5 * quantidade)}.`)
            break
        case 500:
            console.log(`${quantidade} -> Refrigerante = ${converte_Real(3.5 * quantidade)}.`)
            break
        case 600:
            console.log(`${quantidade} -> Suco = ${converte_Real(2.8 * quantidade)}.`)
            break
        default:
            console.log(`Produto com código ${cod_item} não existente.`)
    }
}

pedido(100, 3)
pedido(200, 5)
pedido(300, 3)
pedido(400, 4)
pedido(500, 1)
pedido(600, 9)
pedido(2300, 3)