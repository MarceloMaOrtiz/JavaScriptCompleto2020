# Frontend

# Aula

### Instalando o CLI do Angular
- npm i -g @angular/cli
    - A partir do CLI será gerado o projeto, módulos e componentes

### Criando projeto
- ng new NOME PREFIXO --minimal
    - PREFIXO padrão é app
    - floag --minimal remove alguns arquivos

### Iniciar projeto
- npm start

### Configurações alteradas
- angular.json
    - inlineTemplate: False
    - inlineStyle: False
        - Caso as opções mantenha true, será gerado um único arquivo para manter tanto o HTML quanto o CSS

### Instalando componentes do Material
- ng add @angular/material
    - Prove diversos componentes e pré-configurações existentes para uso

### Criando componente
- ng generate component PATH || ng g c PATH
    - Cria um determinado componente, criando os arquivos HTML, CSS e TS

### Instalando componentes pertencentes ao Material
- Necessário importar, e adicionar nos imports os componentes desejados
    - Dessa forma está sendo construido as dependências entre os módulos.

### Arquivos Estáticos
- Normalmente coloca os arquivos dentro da pasta assets

### Criando diretivas
- ng genarate dictive PATH || ng g d PATH
    - Cria o arquivo .ts no PATH e atualiza o app.module.ts

### Arquivos
<b>'tsconfig.json'</b> -> Configura questões de compilação do código TypeScript
<b>'angular.json'</b> -> Arquivo de configuração do projeto. Uma mudança feita no arquivo, 'inlineTemplate' e 'inlineStyle' setados para false, com essa alteração teremos os arquivos .html e .css em arquivos separados e teremos um arquivo ts que irá referênciar ambos. Essa configuração inicial veio dessa forma por inicializar o projeto, utilizando o cli do angular, com a opção --minimal. Com isso temos dentro da pasta '/src/app' os arquivos .ts sendo utilizados inline, ou seja, html, css no mesmo arquivo
<b>'/assets'</b> -> Armazena arquivos de imagens, fontes...
<b>'/environments</b> -> Local para armazenar as variáveis de ambiente

## Angular/CLI proporciona os comando NG

### Instalação do material.
- $ ng add @angular/material

### Gerando Component. Já cria o componente e regista dentro do módulo, "src/app/app.module.ts". Como o HTML, CSS e JS não é inline, serão gerado 3 arquivos
- $ ng generate component %PATH% ou $ ng g c %PATH%

### Importar componentes que serão utilizados em "src/app.module.ts"

### Oganização dos arquivos
##### 'src/app/components' -> Tudo aquilo que for trecho de componenetes que podem ser reutilizáveis
##### 'src/app/views' -> Seria uma tela "inteira"

### Gerando Diretivas. É criado o arquivo 'src/app/%PATH%/nome.directive.ts', e o 'src/app/app.module.ts' é atualizado
- $ ng generate directives %PATH% ou ng g d %PATH%

### Arquivo modelo para o TS ler os dados criado em 'src/app/PATH'

### Gerar Services. É criado um service dentro de 'src/app/%PATH%'
- $ ng generate services %PATH% ou ng g s %PATH%

### Utilização de uma biblioteca do Material, os Schematics. Foi criado com nome 2
- $ ng generate @angular/material:table %PATH%

# BUG LOCO #
Apareceu um bug no arquivo "src/app/components/template/nav/*.html". Htmls idênticos estão tendo comportamentos diferentes, um funciona, enquanto outro não.

# Setup Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
