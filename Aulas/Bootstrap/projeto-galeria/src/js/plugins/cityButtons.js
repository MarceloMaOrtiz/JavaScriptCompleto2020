import $ from 'jquery'

// Importando a função onLoadHtmlSuccess para possibilitar o carregamento do JS via Ajax
import { onLoadHtmlSuccess } from '../core/includes'

const duration = 600 // Para fade-in e fade-out

// Isso aqui é a função responsável por fazer o fade-in e fade-out.
// Mas ainda é importante plugar essa função
function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {
        // Verficação manterá Falso somente quando houver uma city e essa
        // city não for igual ao atributo
        const isTarget = $(this).attr('wm-city') === city || city === null
        if (isTarget) {
            // removendo essa class, sem esse paso ficará buracos em branco entre as imagens
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function () {
    // Está utilizando Set para evitar valores repetidos
    const cities = new Set
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })

    // Para cada item do set está gerando um botão
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city)
        btn.on('click', e => filterByCity(city))
        return btn
    })

    // Criando um buttom para mostrar todas as imagens
    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.on('click', e => filterByCity(null))

    // Adicionando btnAll no array btns
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    $(this).html(btnGroup)
}

// Dessa forma, só será executada essa função quando a página for carregada
onLoadHtmlSuccess(function () {
    $('[wm-city-buttons]').cityButtons()
})