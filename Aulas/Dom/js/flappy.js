
const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const wmFlappy = document.querySelector('[wm-flappy]')

// Criando a div interna para o bird e a tabela de score
function criaBirdScore() {
    // Criando a div interna para o bird
    const birdDiv = document.createElement('div')
    birdDiv.setAttribute('id', 'bird-box')

    // Criando img do bird dentro da div interna
    const bird = document.createElement('img')
    bird.setAttribute('src', './imgs/passaro.png')
    
    birdDiv.appendChild(bird)

    wmFlappy.appendChild(birdDiv)

    // Criando a div para o score
    const scoreDiv = document.createElement('div')
    scoreDiv.setAttribute('id', 'score')

    wmFlappy.appendChild(scoreDiv)

}

// Function responsável por controlar o voo do bird
function controlaVoo(){

    const img = document.querySelector('img')

    let altura = getComputedStyle(img).top

    let flyOrFall = false

    document.addEventListener('keydown', e => {
        flyOrFall = true
    })

    document.addEventListener('keyup', e => {
        flyOrFall = false
    })

    // Controla velocidade
    setInterval(flyFall, 550)

    function flyFall() {

        if (img.style.top)
            altura = img.style.top
        
        altura = parseFloat(altura.replace('px', ''))

        if (flyOrFall) {

            altura -= 9

            if (altura <= 0)
                altura = 0

            img.style.top = `${altura}px`
        }
        else {
            
            altura += 5
            
            if (altura >= 455)
                altura = 455

            console.log(altura)
            
            img.style.top = `${altura}px`
        }
    }
}

// Função para criar os canos de forma aleatória
function criaCano() {
    const canoDiv = document.createElement('div')
    canoDiv.classList.add('cano')

    wmFlappy.appendChild(canoDiv)

    const canoTopDiv = document.createElement('div')
    canoTopDiv.classList.add('cano-corpo')
    const bocaTopDiv = document.createElement('div')
    bocaTopDiv.classList.add('cano-boca')
    const espacoVazio = document.createElement('div')
    espacoVazio.classList.add('espaco-vazio')
    const canoBotDiv = document.createElement('div')
    canoBotDiv.classList.add('cano-corpo')
    const bocaBotDiv = document.createElement('div')
    bocaBotDiv.classList.add('cano-boca')

    canoDiv.appendChild(canoTopDiv)
    canoDiv.appendChild(bocaTopDiv)
    canoDiv.appendChild(espacoVazio)
    canoDiv.appendChild(bocaBotDiv)
    canoDiv.appendChild(canoBotDiv)

    const alturaCano = randomIntFromInterval(3, 70)
    canoBotDiv.style.height = `${alturaCano}%`
    canoTopDiv.style.height = `${100-alturaCano-27}%`

    let widthMax = 720/8
    let widthAtual = 0
    const idInterval = setInterval(growDiv, 60)

    function growDiv() {
        if (widthAtual == widthMax)
            clearInterval(idInterval)
        else {
            widthAtual += 1
            canoDiv.style.width = widthAtual + 'px'
        }
    }
}

criaBirdScore()
criaCano()
controlaVoo()

