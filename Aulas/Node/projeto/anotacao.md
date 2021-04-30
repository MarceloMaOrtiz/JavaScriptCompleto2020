## Como o projeto foi feito

### Primeiros Passos

##### Criamos um package.json básico
- $ npm init -y

##### Instalamos o Express:4.16.2 e com o --save já adicionamos ele no package.js e o -E foi instalada a versão exata
###### Nesse passo surgiu o package-lock.js
- $ npm i --save express@4.16.2 -E

##### Criada a pasta src - Um padrão para inserir o código fonte
##### Criado o arquivo servidor.js

##### Foi alterado dentro do package.json o "main" e foi adicionado um novo "scripts"
###### "main": "src/servidor.js", "scripts": {"start": "nodemon"}

##### Para utilizarmos o nodemon, precisamos executar nosso projeto utilizando
- $ npm start

##### O nodemon faz com que a aplicação seja restardada após alguma alteração.
##### Não é aconselhável instalar o nodemon no projeto, pois é utilizado para desenvolvimento
##### Portanto para instalar o nodemon para dev podemos utilizar
- $ npm i --save-dev nodemon@1.14.11 -E

#### Foi instalado o body-paser -> Importante para utilizar o body do lado do servidor de forma correta
- $ npm i --save body-parser@1.18.2 -E