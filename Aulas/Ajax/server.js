const bodyParser = require('body-parser')
const express = require('express')
const app = express()


// Serão feitos middlewares -> Funções reponsáveis por fazer determinada tarefa, quando uma determinada
// requisição chegar

// Isso seta os arquivos statics para a pasta atual. Por padrão, o arquivo lido é o index.html, por conta
// ao abrir o servidor teremos ele executado
app.use(express.static('.'))

// É possível utilizar como primeiro parâmetro uma URL pré-definida onde o bodyParser irá funcionar
// app.use('URL', bodyParser.urlencoded({ extended:true })), sem determinar a URL o parser será utilizado
// para qualquer requisição. É um módulo deprecated.
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

// importar o módulo responsável por possibilitar uploads
const multer = require('multer')

// Função diskStorage, recebe um objeto responsável por configurar. É comum arquivos de upload serem colocados
// em pastas separadas, e não banco de dados. Além de ser comum dar nomes com prefixos para não ocorrer override
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

// Prepara um interpretador para o upload, utilizando o objeto a cima, e setando que será recebido pela função
// como o campo do arquivo o nome 'arquivo'
const upload = multer({ storage }).single('arquivo')

// Post utilizado para trabalhar com o XmlHttpRequest2.html
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso')
    })
})

// Post utilizado para trabalhar com o fetch2.html e axios2.html
app.post('/formulario', (req, res) => {
    res.send({
        // Utilizando operador Spread, tudo que vem do req.body vai ser devolvido como reposta
        // req.body só funciona, pois o bodyParser está configurado
        ...req.body,
        id: 1
    })
})

// Get para o exemplo do axios2.html
app.get('/parOuImpar', (req, res) => {
    // Existe algumas formas de receber os dados dentro do express
    // req.body
    // req.query -> quando vem na query da URL
    // req.params -> é possível adicionar na URL, Ex, '/parOuImpar/:numero'
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))