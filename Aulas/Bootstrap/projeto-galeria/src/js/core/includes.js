import $ from 'jquery'

// Lista de funções callbacks que serão chamadas quando uma requisição for bem sucedida
const loadHtmlSuccessCallbacks = []

// Função responsável por registar as funções callbacks dentro da const loadHtmlSuccessCallbacks
export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)){
        loadHtmlSuccessCallbacks.push(callback)
    }
}

// Função responsável por ler todos os atributos 'wm-include' de um determinado parent
function loadIncludes(parent) {
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                // Excluindo para que não haja uma nova interpretação de um mesmo 'wm-include'
                $(e).removeAttr('wm-include')

                // Chamando as funções callbacks para executar os JS
                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                // Sendo chamado de forma recursiva. OBS: Ainda não fui convencido da necessidade
                loadIncludes(e)
            },
            error(e) {
                console.log(e.statusText)
            }
        })
    })
}

loadIncludes()