## Será Utilizado um servidor para servir os arquivos estáticos e fazer as chamadas AJAX

#### Primeiramente foi iniciado um package.json básico
- $ npm init -y

#### Foi modificado o script "start": "nodemon server.js" dentro do package.json

#### Foi adicionado as "dependencies" no package.json
###### Adicionado "body-parser" -> Responsável por fazer o parser da requisição
###### Adicionado "express" -> Responsável por instanciar um serviço web
###### Adicionado "multer" -> Utilizado para fazer upload de arquivos

#### Foi adicionado as "devDependencies" no package.json
###### Adicionado o "nodemon" -> manterá durante o desenvolvimento um servidor para auxiliar na velocidade de desenvolvimento, monitorando os arquivos

#### Após escrever as depêndencias foram instaladas via npm
- $ npm i

#### Foi criado um novo arquivo "server.js" e foi implementado o servidor

#### Para iniciar o servidor é só executar
- $ npm start