## Exemplo simples e prático para forms

#### O local do módulo server.js não é exemplo para produção, está sendo utilizado só para resolver
#### exercícios mais simples

#### Será utilizado esse arquivo para funcionar como servidor. Por isso foi utilizado
- $ npm init -y

#### Foi instalado o express e o body-parser
- $ npm i --save express@4.16.3 body-parser@1.18.2 -E

#### Foi instalado o nodemon
- $ npm i --save-dev nodemon@1.17.1 -E

#### Foi alterado o main do package.json colocando main: "server.js"
###### Com isso é possível startar o server com
- $ nodemon