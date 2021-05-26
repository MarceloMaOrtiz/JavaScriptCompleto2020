## Essa aula foi feita do 0, nenhum arquivo .zip foi baixado

#### Instalar o projeto node básico
- $ npm init -y

#### Modificar o arquivo package.json
###### Alterar o name, pois "webpack" pode gerar um conflito
###### Script "start": "Webpack" acrescentado
###### Adicionado as "devDependencies", todas utilizadas serão em dev

#### Criação da pasta src
###### Criação do arquivo pessoa.js, principal.js

#### Criação do arquivo de configuração padrão do webpack, webpack.config.js.
###### Será interpretado pelo node

#### Após inserir as configurações básicas no webpack, já foi possível executar o comando de start
###### Com o comando é criado uma pasta dist com o arquivo main.js
- $ npm start

#### A pasta modulos foi criada com o objetivo de entender como funciona o sistema de módulos do webpack
###### Portanto temos o webpack funcionando da seguinte maneira: Inicialmente ele parte do arquivo 'entry' presente na configuração, em seguida todos os arquivos que estam ao alcance são percorridos pelo webpack. Ou seja, imports, imports de imports e assim por diante.
###### OBS: A extensão do arquivo determina como ele será tratado dentro do loader do webpack.

#### Foi alterada a saida padrão do webpack, alterando de '/dist' para '/public' e 'main.js' para 'principal.js'

#### /assets foi criado dentro de /src para os statics files

#### Ao utilizar o webpack para buildar arquivos .css houve erros, havendo a necessidade de configurar o webpack.
###### Foi adicionada rules para o webpack que é responsável por configurar o loader para tratar o determinado tipo de arquivo de uma maneira pré-determinada.
###### Acrescentando, por exemplo, aos arquivos '.css' o 'style-loader e o 'css-loader'. Para ser possível utilizar esses dois valores (provavelmente são funções), é necessário instalar, levando assim a modificação do package.json. Adicionando o "css-loader" e o "style-loader"

#### Criado o arquivo 'index.html' dentro de public e o script 'principal.js' foi importado

###### OBS: Ocorreu um problema nesse ponto, ao executar o index.html deveria aparecer uma red screen, o que não ocorreu. Durante o download das dependencias do node, apareceu umas vulnerabilidades, para removê-las utilizei o npm audit fix --force, de fato o problema foi resolvido, mas tela vermelha não apareceu. Ao voltar as dependencias para a versão igual do professor, a tela vermelha voltou a aparecer. Portanto para fazer o index.html de fato funcionar é necessário alterar o package.json com as seguinte dependencias

"css-loader": "0.28.11",
"style-loader": "0.21.0",
"webpack": "4.8.1",
"webpack-cli": "2.1.3"

#### Adicionado mais uma depêndencia, 'mini-css-extract-plugin', cujo objetivo é extrair o css para uma arquivo específico

#### Outras depêndecias instaladas, 'node-sass' e 'sass-loader', nomes bem intuitivos, utilizar o sass com o webpack (loader) e o node
###### Criado uma nova pasta para testar o scss, '/scss' dentro de assets, e os arquivos 'index.scss' e 'botao.scss'. Ao executar o start, os arquivos '.scss' ainda não serão captador pelo webpack, pois não foram referênciados em nenhum lugar.
###### Para isso, foi criado uma arquivo 'index.js' dentro de assets. Com o objetivo de ser importado durante o start, importanto tanto o '.css' quando o '.sass'

#### Outras três dependênci
as instaladas, 'cross-env' para setar uma variável de ambiente para production, 'optimize-css-assets-webpack-plugin' utilizada para mimificar os arquivos css, e 'uglifyjs-webpack-plugin'

#### Foi adicionado um segundo script, 'build' para setar uma variável de ambiente 'NODE_ENV' para production.
###### No 'webpack.config.js' foi feito o tratamento com o 'NODE_ENV' para conseguirmos executar o webpack tanto para development, utilizando *'$ npm start'*, quanto para production, *$ npm rum build*. Importante ressaltar que os arquivos só são mimificados quando utilizado o ambiente de production.

#### Por motivos de incompatibilidade de versões, a biblioteca UglifyJs não está suportando ES6. Para resolver o problema será utilizado a biblioteca Terser. *Essa alteração não foi colocada em prática*, pois a versão do webpack instalada no projeto não é suportado pelo Terser

#### Criado a pasta '/imgs' dentro do assets e adicionado a 'logo.png'. Para conseguir carregar esse imagem com o webpack é necessário baixar o 'file-loader', e foi adicionado as rules do webpack config.

#### Adicionado um webserver para o webpack, um servidor para auxiliar durante o desenvolvimento, utilizando a depêndencia 'webpack-dev-server'. Necessário alterar o script 'start' para 'webpack-dev-server'