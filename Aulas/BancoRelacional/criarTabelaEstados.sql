-- Cometário --
-- Criando a Tabela Estado!
create table estados (
    -- INT -> É possível definir o tamanho do int, sem definir é utilizado
    --  o tamanho padrão
    -- Unsigned -> Sem sinal
    -- NOT NULL -> Não Nulo
    -- AUTO_INCREMENT, Auto incrementado, não não seja passado um valor, o SQL
    --  vai incrementando automaticamente. Surrogate Key
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    -- VARCHAR -> Campo texto com máximo de 45 caracteres
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    -- ENUM -> Obriga o valor da coluna ser algum dos presentes dentro de ENUM
    regiao ENUM('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    -- DECIMAL -> O decimal possui 5 dígitos, e 2 Decimais. Nesse caso será
    --  utilizado a unidade de milhões
    populacao DECIMAL(5,2) NOT NULL,
    -- PRIMARY KEY -> Define o PK da entidade. Sendo possível utilizar duas colunas
    PRIMARY KEY (id),
    -- UNIQUE KEY -> Remove duplicidade para os campos selecionados
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);