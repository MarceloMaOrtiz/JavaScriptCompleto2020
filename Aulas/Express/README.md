# Express

### Início do projeto
- $ npm init -y

### Instalar Express
- $ npm i --save express

### Criado arquivo principal
- index.js -> Presente no package.json

### Instalando Nodemon
- $ npm i --save-dev nodemon
- Dependência para desenvolvimento
    - Auxilia na monitoração dos arquivos
- Possível configurar os scripts
    - "start": "nodemon"
- Não é tão interessante para produção
    - PM2 mais aconselhável

### Instalando PM2
- $ npm i --save pm2
- Possível configurar os scripts
    - "production": "pm2 start index.js --name appx-backend"
- É mais robusto
    - Mostra diversas informações
- Ótimo para Microsserviços
- Interessante instalar globalmente no servidor
    - Facilita o gerenciamento de diversos apps
        - $ pm2 monit
            - Abre uma interface
    - Auxiliar na reinicialização do app quando o mesmo da alguma falha
        - E caso restarta várias vezes em um pequeno espaço de tempo, ele considera que de fato há um erro
    - Possui logs
    - Possibilita envio de comandos para determinado app, utilizando o id da app ou o próprio nome

### Uso com FrontEnd JS
- Maioria dos Frameworks Client Sides, trabalharão com requisições Ajax para receber dados em json

### Midlewares
- Muito importante
    - Existem middlewares prontos disponíveis para serem utilizado
- Se existe mais de uma função que pode ser chamada dentro da app à partir de uma requisição, a primeira função encontra será chamada
    - Portanto a ordem das funções faz diferença
    - Esse é o padrão Chain of Responsabilities - Cadeia de Responsabilidades
- Para possibilitar chamar mais de uma função, é possível adicionar como parâmentro nas funções, outra função
    - Não importa o nome, mas next() é o padrão a ser utilizada
- A função middleware recebe a req, res e a next como parâmetro

### Midlewares de Terceiros
- Criado saudacaoMid.js
    - É possível chamarmos uma função externa diretamente dentro de um use, que os parâmetros serão enviado normalmente
        - Porém sem a função next() na função externa, a execução não será continuada para outra função
        - Para solucionar é possível adicionar uma função dentro do módulo exportado, com os parâmetros recebidos, incluindo o next, e chamando-o, criando assim uma middleware function
- Portanto é possível utilizarmos funções externar com envio de parâmetros específicos para elas, mas é necessário que essas funções retornem uma middleware function

### Instalando body-parser
- $ npm i --save body-parser
- Utilizado para auxiliar no parser do body recebido nas requisições
    - Text
    - Json
    - UrlEncoded

### Comunicação entre Módulos
- Forma simples (Padrão)
    - Para exemplificar foi criada a pasta api com o arquivo usuario.js
- Utilizando outro modelo
    - Nesse caso ao invés de colocar as funções dentro de um objeto, é exportado uma função que recebe o app
        - Esse app possibilita inserir funções http dentro do novo módulo
    - Forma interessante para organizar o fluxo da aplicação em mais módulos, ao invés de deixar tudo presente no index