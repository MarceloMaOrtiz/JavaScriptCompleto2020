# Aulas sobre Banco de Dados Relacional
- Será utilizado MySql

### vscode-database
- Extensão baixado no VSCode para trabalhar com SQL Database
    - Ctrl+Shift+p -> SQL: Connect to MySql / Post...

### Módulo
- Será criado uma Tabela Estados, Cidades, Prefeitos, Empresas
    - Estados-|--<-Cidades
    - Cidades-|--|-Prefeitos
    - Cidades->--<-Empresas
        - Cidades-|--<-Cidades_Empresas->--|-Empresas
- Para criar, e inserir dados nas tabelas são utilizados arquivos.sql
    - Mais para frente será visto processo de Migrations