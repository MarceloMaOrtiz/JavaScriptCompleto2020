# Essa pasta foi criada para aprender sobre a utilização do package.json

## Inicialmente foi utilizado o comando

#### O init puro da opções no prompt para preenchimento
- $ npm init

#### Automaticamenete irá responder sim para todas as perguntas e irá gerar o package.json
- $ npm init -y

### O package.json, além de descrever o projeto, possui como principal objetivo informar quais são as
### bibliotecas necessárias para o projeto

## Em seguida foi utilizado

#### Além de instalar as dependencias, é criada uma área no package.json para informar as dependencias 
- $ npm i --save axios

### Dentro do package.json temos "dependencies": { "axios": "^0.21.1" } -> ^ está bloqueando update da versão major
##### ^ bloqueia o update major  x.y.z -> x = major, y = minor, z = fix

### Dentro do package.json temos "dependencies": { "axios": "~0.21.1" } -> ^ está bloqueando update da versão major e minor
##### ~ bloqueia o update major e minor x.y.z -> x = major, y = minor, z = fix

### Dentro do package.json temos "dependencies": { "axios": "0.21.1" } -> sem nada está bloqueando qualquer update
##### bloqueia qualquer update x.y.z -> x = major, y = minor, z = fix

#### É possível instalar dependencias somente para desenvolvimento, acrescentando o dev
- $ npm i --save-dev axios

### O arquivo package-lock.json deve ir para o repositório, ele escreve o package de forma mais precisa

## Novo teste

### Nesse momento a pasta node_modules foi excluida
#### O arquivo principal no package.json foi alterado de index.js para funcionarios.js
- "main": "funcionario.js",
#### Foi adicionado nos scripts o "start" e o "dev", para sempre que executado executar nodemon funcionarios.js,
#### já que alteramos a "main". Com isso ao alterar o arquivo e salvar, o programa é restartado
- "scripts": {
    "start": "nodemon",
    "dev": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

#### Para refazer a pasta node_modules utilizando o package.json que possue as dependencias utilizamos o comando
- $ npm i

### Para iniciliazar o projeto a partir do package.json, utilizando assim os scripts feitos com o "nodemon", utilizamos o comando
##### OBS: npm dev não irá funcionar, pois não é um comando padrão do Node. Test é padrão, logo é possível utiliza-lo
- $ npm start

#### Para utilizar o dev
- $ npm run dev

### É possível definir novos scripts, por exemplo, um script que geraria todos os arquivos necessários para produção

### Existe diversos scripts do npm
- https://docs.npmjs.com/misc/scripts
