## Back-End Projeto Final

###### Para utilizar a aplicação Back-End é necessário configurar um ambiente com o Node. Diferentemente do Front-End, que utiliza arquivos estáticos

#### Inicialmente foi criada a pasta config e o arquivo middlewares.js
    - Serão necessários dois middlewares
        - BodyParser (Utilizando JSON)
        - Cors (Possibilita acessar a API através de outra aplicação - Front End)

#### Utilização do Consign auxilia na utilização de bibliotecas, evitando o uso constante de require
    - Auxilia no gerenciamento das dependências. Visto que é possível acompanhar seu progresso durante a inicialização do back-end do app 
    - Nesse momento é utilizado o app instanciado em index.js

###### Criada a pasta api

#### Criado arquivo de routes.js dentro de config
    - Após esse passo, é necessário vincular a chamada da URL utilizada com a função correta

#### Utilizando knex
    - Comando inicial para criar um arquivo knexfile.js
        - $ knex init
            - Gera um arquivo com a configuração para comunicação com o BD
            - O arquivo foi alterado, removendo objetos internos, e deixando somente as informações diretas dentro de um objeto
    - Criado arquivo db.js dentro de config.
    - Instanciado o db, utilizando knex, dentro do index.js
    - Após finalizar a configurações do knex é necessário executar um comando para migração
        - $ knex migrate:make "NOME_DA_MIGRAÇÃO"
            - Dessa forma é criado uma nova pasta dentro do projeto, migrations, onde é criado arquivos utilizado para gerar os Bancos
    - Agora é executado todas as migrações na ordem que foram geradas
        - $ knex migrate:latest
        - $ knex migrate:rollback
    - É possível adicionar o migrate dentro de módulos
        - Colocando dentro de db.js, por exemplo, sempre que a aplicação é executada, o banco é gerado
