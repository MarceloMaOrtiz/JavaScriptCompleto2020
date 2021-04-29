// Formas de exportar entre os modulos

// Forma mais clássica para exportar
module.exports = {
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}

// O que fica fora do modulo, não é acessível externamente quando importado
const boaTarde = 'Boa Tarde'