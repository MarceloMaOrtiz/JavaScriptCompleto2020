# Frontend

# Aula

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
