# Projeto Galeria
### Utilizando principalmente jQuery, Bootstrap e WebPack

##### Terá uma galeria de fotos, e uns botões para filtrar as imagens

## Organização do Projeto
-- projeto-galeria
---- .gitignore
---- package-lock.json
---- package.json
---- webpack.config.js
---- README.md
---- src
------ index.html
------ index.js
------ imgs
-------- floripa1.png
-------- ny1.png
-------- ny2.png
-------- ny3.png
-------- ny4.png
-------- rj1.png

## Pré-Configurações
#### Package.json
###### Já possui as devDependencies, as obrigatórias para o uso do Bootstrap e o resto é praticamente para utilização do Webpack. Os scripts "start", onde as pastas de produção não são criadas, e "build", que irá criar a pasta build quando for finalizar o projeto
#### webpack.config.js
###### Já veio pré-configurado

## Início do Projeto

#### Instalação das dependências
- $ npm i
#### Criado a pasta '/src/scss/', e arquivos '/src/scss/custom.scss' e '/src/scss/index.scss'

#### Sistema de importação inicialmente feito

#### Criação da pasta '/src/pages' e '/src/pages/template'

#### Criação e Desenvolvimento do '/src/pages/template/header.html'
É possível utilizar 'ctrl+c + v' ao inspecionar um elemento na documentação do bootstrap para utilizar algum template.

#### Concluído o header, foi adicionado no index.html. Será utilizado o atributo 'wm-include' para utilizar js para adicionar ao index os determinados arquivos via Ajax

#### Criado a pasta '/src/js/' e '/src/js/core', que significa núcleo, auxilia para dividir a pasta '/js' em plugins, galeria, detalhamento... Sendo o '/core' os arquivos principais.
#### Criado arquivo '/src/js/core/includes.js', e importado no '/src/js/index.js', junto das depêndencias do 'jquery' e 'bootstrap'

#### Criado a pasta '/src/pages/galery' e os arquivos '/src/pages/galery/galeryHeader.html' e '/src/pages/galery/galery.html'


#### Criado a pasta '/src/js/plugins/' e o arquivo '/src/js/plugins/cityButtons.js'

#### Criado o arquivo '/src/pages/template/footer.html'

## IMPORTANTE !!
#### A partir do momento que é feito o include no 'index.html' para chamar a função dos botões, o Ajax não está fazendo a leitura do JS. Para isso foi necessário acrescentar um código no 'includes.js', que será exportado.
#### Importado a função 'onLoadHtmlSuccess' dentro do 'cityButtons.js'

#### OBS: Alguns problema não haverá em frameworks maiores, como React. Podemos citar a criação de uma tag personaliza para incluir um elemento dentro do outro, fazer essa callback quando uma página é carregada, misturando ainda WebPack