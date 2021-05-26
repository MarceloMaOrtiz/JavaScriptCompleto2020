// Utilização do padrão de classe e de sistema de módulo do ES2015
// Para utilizar esse sistema de módulo no node, é necessário fazer algumas
// configurações. Configurando o WebPack, e utilizá-lo já foi possível utilizar esse tipo de import/export
export default class Pessoa {
    cumprimentar() {
        return 'Bom dia!'
    }
}

// Utilização do sistema de módulo do CommonJs
// module.exports = class Pessoa { 
//     cumprimentar() {
//         return 'Bom dia!'
//     }
// }