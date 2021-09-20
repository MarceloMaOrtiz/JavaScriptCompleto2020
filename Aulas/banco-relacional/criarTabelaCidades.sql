-- Já faz uma verficação se a Tabela Existe antes de criar, isso evitar
--  a geração de um Error
CREATE TABLE IF NOT EXISTS cidades (
    id INT unsigned NOT NULL auto_increment,
    nome VARCHAR(255) NOT NULL,
    -- Utilizada como chave estrangeira para fazer a relação 1 -> N
    estado_id INT unsigned NOT NULL,
    -- Area que nesse caso será utilizado metros quadrados
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    -- Fazendo a referência da chave estrangeira estado_id com o
    --  id da tabela estados
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);

-- Testes para posteriormente Dropar a Tabela
-- Interessante notar o uso do PRIMARY KEY junto do ID da tabela
-- CREATE TABLE IF NOT EXISTS teste (
--     id INT unsigned NOT NULL auto_increment PRIMARY KEY
-- );

-- DROP TABLE IF EXISTS teste;