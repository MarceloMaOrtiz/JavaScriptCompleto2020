(function () {
    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        if(!link) return

        const destino = document.querySelector('[wm-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
                // Insersão de código para fazer leitura do JS após leitura Ajax. Essa não a forma
                // convencional, mas funciona. O risco está no Eval que pode manter um canal aberto
                // para hackers

                // html.match() -> Utilizara uma regex.
                // ([\s\S]* -> Conceito para dote all para JS, caso utilizado .* não funcionará, pois
                // a quebra de linha não será reconhecida. [1] pegará os textos sem as tags.
                // Interessante estudar Regex
                const resultado = html.match(/\<script\>([\s\S]*)\<\/script\>/)

                if (resultado && resultado.length >= 2)
                    eval(resultado[1])
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()