// Anotações importantes que surgiram a partir da solução do professor
// O professor antes de entrar no JS, desenhou todos os itens existentes na página
// Foram utilizadas muitas funções contrutoras. inclusive com setAltura para o cano
//  Portanto, vale muito apena desenvolver uma função contrutora para desenhar
//  determinada parte do jogo, que será manipulada por essa própria função
// Foi utilizado somente 4 barreiras, movendo-as do final, fora da tela até sumir no inicio
// da tela, e sempre que a barreira era movida novamente para o final da tela, era sorteado
// a abertura do cano. Da forma que eu fiz, foram criados infinitos canos, isso pode levar
// ao travamento do jogo, por carregar muitos elementos na tela. Mesmo reduzindo os elementos
// para 0 de weight e height
// É possível utilizar valores negativos para mover determinado elemento para fora de uma div
// Aparentemente foi utilizada a getBoundingClinetRect() de forma mais simples, sem precisar
// pegar a posição em relação a tela, e sim a div

// Função auxiliar para setar um offset para os elementos, ajudará a pegar o a posição top e left dos elementos
function offset(el)  {
    var rect = el.getBoundingClientRect()
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const wmFlappy = document.querySelector('[wm-flappy]')

const objBird = new Object

let stopAll = false

let score = 0

var divOffSet = offset(wmFlappy)
console.log(divOffSet.left, divOffSet.top)

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

    scoreDiv.innerHTML = score

    wmFlappy.appendChild(scoreDiv)
}

// Função para atualizar a score
function plusScore() {
    const scoreDiv = document.getElementById('score')

    score += 1

    scoreDiv.innerHTML = score
}

// Function responsável por receber um elemento HTML e criar um objeto a partir dela
function criaObjeto (elemento) {
    let itemOffset = offset(elemento)

    let elemWidth = parseFloat((getComputedStyle(elemento).width).replace('px', ''))
    let elemHeight = parseFloat((getComputedStyle(elemento).height).replace('px', ''))

    return {
        x: itemOffset.left,
        y: itemOffset.top,
        width: elemWidth,
        height: elemHeight,
        updateValues() {
            let itemOffset = offset(elemento)
            this.x = itemOffset.left
            this.y = itemOffset.top
        },
        checkCollision(obj) {
            if (this.x < obj.x + obj.width &&
                this.x + this.width > obj.x &&
                this.y < obj.y + obj.height &&
                this.y + this.height > obj.y){
                return true
            }
            else{
                return false
            }
        },
        showValues() {
            console.log(this.x, this.y, this.width, this.height)
        }
    }
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
    let idFlyFall = setInterval(flyFall, 50)

    function flyFall() {

        if (stopAll){
            clearInterval(idFlyFall)
        }

        if (img.style.top){
            altura = img.style.top
        }
        
        altura = parseFloat(altura.replace('px', ''))

        if (flyOrFall) {
            altura -= 11
            if (altura <= 0)
                altura = 0
            img.style.top = `${altura}px`
        }
        else {
            
            altura += 6
            
            if (altura >= 455)
                altura = 455
            // console.log(altura)
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

    const bird = document.querySelector('img')

    let objCanoTop, objBocaTop, objCanoBot, objBocaBot
    let objBird = criaObjeto(bird)

    let point = false

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
    let leftAtual = 87

    let idInterval = setInterval(growDiv, 30)

    function growDiv() {
        if (stopAll){
            clearInterval(idInterval)
        }
        if (widthAtual == widthMax){
            clearInterval(idInterval)
            objCanoTop = criaObjeto(canoTopDiv)
            objBocaTop = criaObjeto(bocaTopDiv)
            objCanoBot = criaObjeto(canoBotDiv)
            objBocaBot = criaObjeto(bocaBotDiv)
            idInterval = setInterval(moveDiv, 30)
        }
        else {
            widthAtual += 3
            canoDiv.style.width = widthAtual + 'px'
        }
    }

    function moveDiv() {
        if (stopAll){
            clearInterval(idInterval)
        }
        if (leftAtual <= 0){
            clearInterval(idInterval)
            idInterval = setInterval(shrinkDiv, 30)
        }
        else {
            leftAtual -= 0.6
            if (leftAtual >= 30 && leftAtual <= 60) {
                objBird.updateValues()
                objCanoTop.updateValues()
                objCanoBot.updateValues()
                objBocaTop.updateValues()
                objBocaBot.updateValues()
                if (objCanoTop.checkCollision(objBird) ||
                    objCanoBot.checkCollision(objBird) ||
                    objBocaTop.checkCollision(objBird) ||
                    objBocaBot.checkCollision(objBird)) {
                    stopAll = true
                }
            }
            canoDiv.style.left = leftAtual + '%'
            if (leftAtual <= 45 && !point){
                point = true
                plusScore()
            }
        }
    }

    function shrinkDiv() {
        if (stopAll){
            clearInterval(idInterval)
        }
        if (widthAtual <= 0)
            clearInterval(idInterval)
        else {
            widthAtual -= 4
            canoDiv.style.width = widthAtual + 'px'
        }
    }
}

(function () {
    criaBirdScore()
    controlaVoo()
    criaCano()
    const idIntervalGame = setInterval(moreOneCano, 3000)

    function moreOneCano(){
        if (stopAll){
            clearInterval(idIntervalGame)
        }
        criaCano()
    }
})()
